import { useState } from 'react';
import styles from './Login.module.css';
import Button from '../../UI/Button';
import InputGroup from '../../UI/InputGroup';
import Alert from '../../UI/Alert';
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from '../../auth';
import { auth, db } from '../../firebase';
import { setDoc, doc } from 'firebase/firestore';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export default function Login({ toggleAuth }) {
    const [isNewUser, setIsNewUser] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const showAlertWithTimeout = (message, duration = 2000) => {
        setErrorMessage(message);
        setShowAlert(true);

        setTimeout(() => {
            setShowAlert(false);
        }, duration);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!EMAIL_REGEX.test(email)) {
            showAlertWithTimeout("Please enter a valid email.");
            return;
        }

        if (isNewUser) {
            if (!username || username.length < 3) {
                showAlertWithTimeout("Username must be at least 3 characters long.");
                return;
            }

            if (password !== repeatPassword) {
                showAlertWithTimeout("Passwords do not match.");
                return;
            }

            if (!PASSWORD_REGEX.test(password)) {
                showAlertWithTimeout("Password must be at least 8 characters long, contain 1 letter, 1 number, and 1 special character.");
                return;
            }
        }

        try {
            setIsSigningIn(true);

            if (isNewUser) {
                await doCreateUserWithEmailAndPassword(email, password);
                const user = auth.currentUser;
                if (user) {
                    await setDoc(doc(db, "Users", user.uid), {
                        email: user.email,
                        username: username,
                    });
                }
                showAlertWithTimeout("User registered successfully");
            } else {
                await doSignInWithEmailAndPassword(email, password);
                const user = auth.currentUser;
                console.log(user);
                showAlertWithTimeout("Logged in successfully");
            }
            toggleAuth();
        } catch (error) {
            switch (error.code) {
                case 'auth/invalid-email':
                    showAlertWithTimeout("Invalid email format.");
                    break;
                case 'auth/user-not-found':
                    showAlertWithTimeout("No user found with this email.");
                    break;
                case 'auth/wrong-password':
                    showAlertWithTimeout("Incorrect password. Please try again.");
                    break;
                case 'auth/too-many-requests':
                    showAlertWithTimeout("Too many failed attempts. Please try again later.");
                    break;
                case 'auth/invalid-credential':
                    showAlertWithTimeout("Invalid credentials. Please check your email and password.");
                    break;
                default:
                    showAlertWithTimeout("An unexpected error occurred. Please try again.");
                    break;
            }
        } finally {
            setIsSigningIn(false);
        }
    };

    return (
        <div className={styles.modalContent}>
            <h2>{isNewUser ? 'Register' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formContent}>
                    <div className={styles.inputs}>
                        <InputGroup
                            inputGroupClass={styles.inputGroup}
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {isNewUser && (
                            <InputGroup
                                inputGroupClass={styles.inputGroup}
                                label="Username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        )}
                        <InputGroup
                            inputGroupClass={styles.inputGroup}
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {isNewUser && (
                            <InputGroup
                                inputGroupClass={styles.inputGroup}
                                label="Repeat Password"
                                type="password"
                                value={repeatPassword}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                            />
                        )}
                    </div>

                    <div className={styles.actions}>
                        <Button variant={isSigningIn ? "disabled" : "primary"} type="submit" size="medium">
                            {isNewUser ? 'Register' : 'Login'}
                        </Button>
                        <Button
                            variant={isSigningIn ? "disabled" : "secondary"}
                            size="medium"
                            onHandleClick={() => setIsNewUser(!isNewUser)} >
                            {isNewUser ? 'Already have an account? Login' : 'Create a new account'}
                        </Button>
                    </div>
                </div>
            </form>
            {showAlert && <Alert message={errorMessage} onClose={() => setShowAlert(false)} />}
        </div>
    );
}
