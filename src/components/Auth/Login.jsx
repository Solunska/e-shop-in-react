import styles from './Login.module.css';
import Button from '../../UI/Button';
import InputGroup from '../../UI/InputGroup';
import { useAuthForm } from '../../hooks/useAuthForm';

export default function Login({ toggleAuth }) {
    const {
        isNewUser,
        setIsNewUser,
        isSigningIn,
        errorMessage,
        handleSubmit,
        formFields,
        handleFieldChange
    } = useAuthForm(toggleAuth);

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
                            name="email"
                            value={formFields.email}
                            onChange={(e) => handleFieldChange(e)}
                        />
                        {isNewUser && (
                            <InputGroup
                                inputGroupClass={styles.inputGroup}
                                label="Username"
                                type="text"
                                name="username"
                                value={formFields.username}
                                onChange={(e) => handleFieldChange(e)}
                            />
                        )}
                        <InputGroup
                            inputGroupClass={styles.inputGroup}
                            label="Password"
                            type="password"
                            name="password"
                            value={formFields.password}
                            onChange={(e) => handleFieldChange(e)}
                        />
                        {isNewUser && (
                            <InputGroup
                                inputGroupClass={styles.inputGroup}
                                label="Repeat Password"
                                type="password"
                                name="repeatPassword"
                                value={formFields.repeatPassword}
                                onChange={(e) => handleFieldChange(e)}
                            />
                        )}
                        {errorMessage ? <p className={styles.error}>{errorMessage}</p> : null}
                    </div>

                    <div className={styles.actions}>
                        <Button
                            variant={isSigningIn ? "disabled" : "primary"}
                            type="submit"
                            size="medium">
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
