import { useCallback, useContext, useEffect, useState } from "react";
import { useFormFields } from "./useFormFields";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";
import { fetchUsersWithId } from "../http";
import { useFetch } from "./useFetch";

export function useCheckoutForm() {
    const userId = auth.currentUser?.uid;

    const fetchUser = useCallback(() => fetchUsersWithId(userId), [userId]);
    const { fetchedData: user, isFetching, error } = useFetch(fetchUser, null);
    const { items, subtotal, clearCart } = useContext(CartContext);

    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [saveCard, setSaveCard] = useState(false);
    const [formFields, handleFieldChange, setFormFields] = useFormFields({
        email: '',
        creditCardNumber: '',
        expiryDate: '',
        cvv: '',
    });

    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.email) {
            setFormFields(prevFields => ({ ...prevFields, email: user.email }));
        }
    }, [user, setFormFields]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!formFields.email || !formFields.creditCardNumber || !formFields.expiryDate || !formFields.cvv) {
            setErrorMessage('All fields are required.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formFields.email)) {
            setErrorMessage('Invalid email format.');
            return;
        }

        if (!/^\d{16}$/.test(formFields.creditCardNumber)) {
            setErrorMessage('Credit card number must be 16 digits.');
            return;
        }

        if (!/^\d{3}$/.test(formFields.cvv)) {
            setErrorMessage('CVV must be 3 digits.');
            return;
        }

        const orderDetails = {
            userId: userId,
            email: formFields.email,
            items: items,
            total: subtotal,
        };

        try {
            setIsSubmitting(true);

            await addDoc(collection(db, "Orders"), {
                orderDetails: orderDetails,
                createdAt: new Date(),
            });

            if (saveCard) {
                await addDoc(collection(db, "Cards"), {
                    userId: userId,
                    email: formFields.email,
                    creditCardNumber: formFields.creditCardNumber,
                    expiryDate: formFields.expiryDate,
                    cvv: formFields.cvv,
                    createdAt: new Date(),
                });
                alert("Credit card information saved successfully!");
            }
            alert("Order submitted successfully!");
            clearCart();
            navigate('/products');
        } catch (error) {
            setErrorMessage("Failed to submit order: " + error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return {
        errorMessage,
        isSubmitting,
        setSaveCard,
        handleSubmit,
        isFetching,
        error,
        formFields,
        handleFieldChange
    }
}