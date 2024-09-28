import { useContext, useState } from 'react';
import styles from './Login.module.css'
import { ModalContext } from '../../context/ModalContext';
import Button from '../../UI/Button';
import CloseButton from '../../UI/CloseButton';

export default function Login() {
    const [isNewUser, setIsNewUser] = useState(false);
    const { setIsAuthModalOpen } = useContext(ModalContext);

    return <div className={styles.modalContent}>
        <CloseButton onHandleClick={() => setIsAuthModalOpen(false)} />
        <h2>Login</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsAuthModalOpen(false); // Close modal on successful login
            // Add login logic here
        }}>
            <div className={styles.formContent}>
                <div className={styles.inputs}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" required />
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" required />
                    </div>
                    {isNewUser ? <div className={styles.inputGroup}>
                        <label htmlFor="repeat-password">Repeat password:</label>
                        <input type="repeat-password" id="repeat-password" required />
                    </div> : null}
                </div>
                <div className={styles.actions}>
                    <Button
                        variant="primary"
                        size="medium"
                        onHandleClick={() => alert('Primary Button Clicked!')}>{isNewUser ? 'Register' : 'Login'}</Button>
                    <Button
                        variant="secondary"
                        size="medium"
                        onHandleClick={() => setIsNewUser(!isNewUser)}>{isNewUser ? 'Login' : 'Register'}</Button>
                </div>
            </div>
        </form>
    </div>
}