import Button from '../../UI/Button'
import classes from './OrderDetails.module.css'

export default function OrderDetails({ orderDetails, toggleOrder }) {
    return <div className={classes.container}>
        <h3>Order Details</h3>
        <div className={classes.itemsContainer}>
            {orderDetails.items.map((item, idx) => (
                <div key={idx} className={classes.itemContainer}>
                    <p>{item.name} </p>
                    <p>{item.quantity} x ${item.price}</p>
                </div>
            ))}
        </div>
        <div className={classes.totalContainer}>
            <p>Total:</p>
            <p className={classes.price}>${orderDetails.total.toFixed(2)}</p>
        </div>
        <Button variant="primary" size="small" onHandleClick={() => toggleOrder()}>
            Close
        </Button>
    </div>
}