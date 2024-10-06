import { useCallback, useContext, useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { fetchUsersWithId } from '../../http';
import InputGroup from '../../UI/InputGroup';
import classes from './CheckoutForm.module.css';
import { auth, db } from '../../firebase';
import Summary from '../ShoppingCart/Summary';
import { addDoc, collection } from 'firebase/firestore';
import CartContext from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export default function CheckoutForm() {
    const userId = auth.currentUser?.uid;

    const fetchUser = useCallback(() => fetchUsersWithId(userId), [userId]);
    const { fetchedData: user, isFetching, error } = useFetch(fetchUser, null);
    const { items, subtotal,clearCart } = useContext(CartContext);

    const [email, setEmail] = useState('');
    const [creditCardNumber, setCreditCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [saveCard, setSaveCard] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.email) {
            setEmail(user.email);
        }
    }, [user]);

    if (isFetching) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!user) return <p>No user data found.</p>;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!email || !creditCardNumber || !expiryDate || !cvv) {
            setErrorMessage('All fields are required.');
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setErrorMessage('Invalid email format.');
            return;
        }

        if (!/^\d{16}$/.test(creditCardNumber)) {
            setErrorMessage('Credit card number must be 16 digits.');
            return;
        }

        if (!/^\d{3}$/.test(cvv)) {
            setErrorMessage('CVV must be 3 digits.');
            return;
        }

        const orderDetails = {
            userId: userId,
            email: email,
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
                    email: email,
                    creditCardNumber: creditCardNumber,
                    expiryDate: expiryDate,
                    cvv: cvv,
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

    return (
        <form onSubmit={handleSubmit} className={classes.mainContainer}>
            {errorMessage && <p className={classes.error}>{errorMessage}</p>}
            <InputGroup
                label='Email address'
                value={email}
                inputGroupClass={classes.inputGroupClass}
                onChange={(e) => setEmail(e.target.value)}
                type='email'
            />
            <InputGroup
                label='Credit Card Number'
                value={creditCardNumber}
                inputGroupClass={classes.inputGroupClass}
                onChange={(e) => setCreditCardNumber(e.target.value)}
                type='text'
            />
            <div className={classes.dateCVV}>
                <InputGroup
                    label='Expiry Date'
                    value={expiryDate}
                    inputGroupClass={classes.inputGroupClass}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    type='text'
                />
                <InputGroup
                    label='CVV'
                    value={cvv}
                    inputGroupClass={classes.inputGroupClass}
                    onChange={(e) => setCvv(e.target.value)}
                    type='text'
                />

            </div>
            <div className={classes.saveCardOption}>
                <label>Save credit card information for future purchases</label>
                <input
                    type="checkbox"
                    checked={saveCard}
                    onChange={(e) => setSaveCard(e.target.checked)}
                />
            </div>
            <Summary styles={classes.summary} btnLabel={isSubmitting ? 'Processing...' : 'Make payment'} hidden btntype='submit' disabled={isSubmitting} />
        </form>
    );
}
