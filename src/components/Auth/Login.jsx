import { useState } from 'react';
import styles from './Login.module.css';
import Button from '../../UI/Button';
import InputGroup from '../../UI/InputGroup';
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
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage('');

        if (!EMAIL_REGEX.test(email)) {
            setErrorMessage("Please enter a valid email.");
            return;
        }

        if (isNewUser) {
            if (!username || username.length < 3) {
                setErrorMessage("Username must be at least 3 characters long.");
                return;
            }

            if (password !== repeatPassword) {
                setErrorMessage("Passwords do not match.");
                return;
            }

            if (!PASSWORD_REGEX.test(password)) {
                setErrorMessage("Password must be at least 8 characters long, contain 1 letter, 1 number, and 1 special character.");
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
            } else {
                await doSignInWithEmailAndPassword(email, password);
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
                        {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
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
        </div>
    );
}
