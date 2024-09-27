import { useContext } from 'react'
import Button from '../../UI/Button'
import classes from './Summary.module.css'
import CartContext from '../../context/CartContext'

export default function Summary() {
    const { subtotal } = useContext(CartContext);
    const discount = 0;
    const total = subtotal - discount;

    return <div className={classes.summary}>
        <p className={classes.heading}>Order Summary</p>
        <div className={classes.order}>
            <div className={classes.subtotalDiscount}>
                <div className={classes.subtotal}>
                    <p>Subtotal</p>
                    <p>${subtotal}.00</p>
                </div>
                <div className={classes.discount}>
                    <p>Discount</p>
                    <p>${discount}</p>
                </div>
            </div>
            <div className={classes.totalCheckout}>
                <div className={classes.total}>
                    <p>Total</p>
                    <p>${total}.00</p>
                </div>
                <Button
                    variant="primary"
                    size="medium"
                    onHandleClick={() => { }}>Checkout</Button>
            </div>
        </div>
    </div>
}