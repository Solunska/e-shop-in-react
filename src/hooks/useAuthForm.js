import { useState } from "react";
import { useFormFields } from "./useFormFields";
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from "../auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export function useAuthForm(toggleAuth){
    const [isNewUser, setIsNewUser] = useState(false);
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [formFields, handleFieldChange] = useFormFields({
        email: '',
        username: '',
        password: '',
        repeatPassword: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!EMAIL_REGEX.test(formFields.email)) {
            setErrorMessage("Please enter a valid email.");
            return;
        }

        if (isNewUser) {
            if (!formFields.username || formFields.username.length < 3) {
                setErrorMessage("Username must be at least 3 characters long.");
                return;
            }

            if (formFields.password !== formFields.repeatPassword) {
                setErrorMessage("Passwords do not match.");
                return;
            }

            if (!PASSWORD_REGEX.test(formFields.password)) {
                setErrorMessage("Password must be at least 8 characters long, contain 1 letter, 1 number, and 1 special character.");
                return;
            }
        }

        try {
            setIsSigningIn(true);

            if (isNewUser) {
                await doCreateUserWithEmailAndPassword(formFields.email, formFields.password);
                const user = auth.currentUser;
                if (user) {
                    await setDoc(doc(db, "Users", user.uid), {
                        email: user.email,
                        username: formFields.username,
                    });
                }
            } else {
                await doSignInWithEmailAndPassword(formFields.email, formFields.password);
                const user = auth.currentUser;
                console.log(user);
            }
            toggleAuth();
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-email':
                    setErrorMessage("Invalid email format.");
                    break;
                case 'auth/user-not-found':
                    setErrorMessage("No user found with this email.");
                    break;
                case 'auth/wrong-password':
                    setErrorMessage("Incorrect password. Please try again.");
                    break;
                case 'auth/too-many-requests':
                    setErrorMessage("Too many failed attempts. Please try again later.");
                    break;
                case 'auth/invalid-credential':
                    setErrorMessage("Invalid credentials. Please check your email and password.");
                    break;
                default:
                    setErrorMessage("An unexpected error occurred. Please try again.");
                    break;
            }
        } finally {
            setIsSigningIn(false);
        }
    };

    return {
        isNewUser,
        setIsNewUser,
        isSigningIn,
        errorMessage,
        handleSubmit,
        formFields, 
        handleFieldChange
    };
}