import { useState } from 'react';
import styles from './Login.module.css'
import Button from '../../UI/Button';
import InputGroup from '../../UI/InputGroup';

export default function Login() {
    const [isNewUser, setIsNewUser] = useState(false);

    return <div className={styles.modalContent}>
        <h2>Login</h2>
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <div className={styles.formContent}>
                <div className={styles.inputs}>
                    <InputGroup inputGroupClass={styles.inputGroup} label="Email" type="email" />
                    <InputGroup inputGroupClass={styles.inputGroup} label="Password" type="password" />
                    {isNewUser ? <InputGroup inputGroupClass={styles.inputGroup} label="Repeat password" type="repeat-password" /> : null}
                </div>
                <div className={styles.actions}>
                    <Button variant="primary" size="medium" onHandleClick={() => alert('Primary Button Clicked!')}>{isNewUser ? 'Register' : 'Login'}</Button>
                    <Button variant="secondary" size="medium" onHandleClick={() => setIsNewUser(!isNewUser)}>{isNewUser ? 'Login' : 'Register'}</Button>
                </div>
            </div>
        </form>
    </div>
}