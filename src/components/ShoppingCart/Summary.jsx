import Button from '../../UI/Button'
import classes from './Summary.module.css'

export default function Summary() {
    return <div className={classes.summary}>
        <p className={classes.heading}>Order Summary</p>
        <div className={classes.order}>
            <div className={classes.subtotalDiscount}>
                <div className={classes.subtotal}>
                    <p>Subtotal</p>
                    <p>$2000.00</p>
                </div>
                <div className={classes.discount}>
                    <p>Discount</p>
                    <p>$0</p>
                </div>
            </div>
            <div className={classes.totalCheckout}>
                <div className={classes.total}>
                    <p>Total</p>
                    <p>$2000.00</p>
                </div>
                <Button>Checkout</Button>
            </div>
        </div>
    </div>
}