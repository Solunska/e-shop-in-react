import { useContext } from 'react'
import Button from '../../UI/Button'
import classes from './Summary.module.css'
import CartContext from '../../context/CartContext'
import { useAuth } from '../../context/AuthContext';
import { useModal } from '../../hooks/useModal';
import Modal from '../../UI/Modal';
import CloseButton from '../../UI/CloseButton';
import Login from '../Auth/Login';
import { useNavigate } from 'react-router-dom';

export default function Summary({ styles, btnLabel, hidden, btntype, disabled }) {
    const { userLoggedIn } = useAuth();
    const { items, subtotal } = useContext(CartContext);
    const { isAuthModalOpen, toggleAuth } = useModal();
    const navigate = useNavigate();
    const discount = 0;
    const total = subtotal - discount;

    return <div className={`${classes.summary} ${styles}`}>
        {!hidden ? <p className={classes.heading}>Order Summary</p> : null}
        <div className={classes.order}>
            <div className={classes.subtotalDiscount}>
                <div className={classes.subtotal}>
                    <p>Subtotal</p>
                    <p>${subtotal}.00</p>
                </div>
                {/* <div className={classes.discount}>
                    <p>Discount</p>
                    <p>${discount}</p>
                </div> */}
            </div>
            <div className={classes.totalCheckout}>
                <div className={classes.total}>
                    <p>Total</p>
                    <p>${total}.00</p>
                </div>
                <Button
                    disabled={disabled}
                    variant="primary"
                    size="medium"
                    type={btntype}
                    onHandleClick={() => {
                        if (!userLoggedIn) {
                            toggleAuth();
                        } else if (items.length === 0) {
                            alert("you dont have any items in your shopping bag")
                        } else {
                            navigate('/checkout')
                        }

                    }}>{btnLabel ? btnLabel : 'Checkout'}</Button>
            </div>
        </div>

        {isAuthModalOpen ? <Modal open={isAuthModalOpen} onClose={toggleAuth} modalStyles={classes.modal}>
            <CloseButton onHandleClick={() => toggleAuth()} />
            <Login toggleAuth={toggleAuth} />
        </Modal> : null}
    </div>
}