import { useState } from 'react';
import styles from './Login.module.css';
import Button from '../../UI/Button';
import InputGroup from '../../UI/InputGroup';
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword } from '../../auth';
import { auth, db } from '../../firebase';
import { setDoc, doc } from 'firebase/firestore';

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

        if (isNewUser && password !== repeatPassword) {
            setErrorMessage("Passwords do not match.");
            return;
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
                alert("User registered successfully");
            } else {
                await doSignInWithEmailAndPassword(email, password);
                const user = auth.currentUser;
                console.log(user)
                alert("Logged in successfully");
            }
            toggleAuth();
        } catch (error) {
            setErrorMessage(error.message);
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
                    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                    <div className={styles.actions}>
                        <Button variant={isSigningIn ? "disabled" : "primary"} type="submit" size="medium" >
                            {isNewUser ? 'Register' : 'Login'}
                        </Button>
                        <Button
                            variant={isSigningIn ? "disabled" : "secondary"}
                            size="medium"
                            onHandleClick={() => setIsNewUser(!isNewUser)}>
                            {isNewUser ? 'Already have an account? Login' : 'Create a new account'}
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
}