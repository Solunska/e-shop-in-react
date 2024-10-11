import InputGroup from '../../UI/InputGroup';
import classes from './CheckoutForm.module.css';
import Summary from '../ShoppingCart/Summary';
import { useCheckoutForm } from '../../hooks/useCheckoutForm';
import Loading from '../../UI/Loading';

export default function CheckoutForm() {
    const {
        errorMessage,
        isSubmitting,
        setSaveCard,
        handleSubmit,
        isFetching,
        error,
        formFields,
        handleFieldChange
    } = useCheckoutForm();

    if (isFetching) return <Loading text="Loading..." />;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <form onSubmit={handleSubmit} className={classes.mainContainer}>
            {errorMessage && <p className={classes.error}>{errorMessage}</p>}
            <InputGroup
                label='Email address'
                value={formFields.email}
                name='email'
                inputGroupClass={classes.inputGroupClass}
                onChange={(e) => handleFieldChange(e)}
                type='email'
            />
            <InputGroup
                label='Credit Card Number'
                value={formFields.creditCardNumber}
                name='creditCardNumber'
                inputGroupClass={classes.inputGroupClass}
                onChange={(e) => handleFieldChange(e)}
                type='text'
            />
            <div className={classes.dateCVV}>
                <InputGroup
                    label='Expiry Date'
                    value={formFields.expiryDate}
                    name='expiryDate'
                    inputGroupClass={classes.inputGroupClass}
                    onChange={(e) => handleFieldChange(e)}
                    type='text'
                />
                <InputGroup
                    label='CVV'
                    value={formFields.cvv}
                    name='cvv'
                    inputGroupClass={classes.inputGroupClass}
                    onChange={(e) => handleFieldChange(e)}
                    type='text'
                />
            </div>
            <InputGroup
                label='Save credit card information for future purchases'
                inputGroupClass={classes.saveCardOption}
                onChange={(e) => setSaveCard(e.target.checked)}
                type='checkbox'
                required={false}
            />
            <Summary styles={classes.summary} btnLabel={isSubmitting ? 'Processing...' : 'Make payment'} hidden btntype='submit' disabled={isSubmitting} />
        </form>
    );
}
