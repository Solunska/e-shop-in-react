import { useContext, useState } from 'react';
import styles from './Login.module.css'
import { NavbarContext } from '../context/NavBarContext';

export default function Login() {
    const [isNewUser, setIsNewUser] = useState(false);
    const { setIsModalOpen } = useContext(NavbarContext);

    return <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={() => setIsModalOpen(false)}>
            &times;
        </button>
        <h2>Login</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
            setIsModalOpen(false); // Close modal on successful login
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
                    <button type="submit" className={styles.primaryButton}>{isNewUser ? 'Register' : 'Login'}</button>
                    <button type="button" className={styles.secondaryButton} onClick={() => setIsNewUser(!isNewUser)}>{isNewUser ? 'Login' : 'Register'}</button>
                </div>
            </div>
        </form>
    </div>
}