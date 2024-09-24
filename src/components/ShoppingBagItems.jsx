import classes from './ShoppingBagItems.module.css';
import { NEW_ARRIVALS } from '../data';
import Button from '../UI/Button';

export default function ShoppingBagItems() {
    return <div className={classes.mainContainer}>
        <div className={classes.shoppingCartItems}>
            <p className={classes.heading}>Shopping Bag</p>
            <table >
                <thead>
                    <tr className={classes.labelsTr}>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {NEW_ARRIVALS.map(item =>
                        <tr key={item.id}>
                            <td>
                                <div className={classes.product}>
                                    <img src={item.image.src} alt={item.image.alt} />
                                    <div className={classes.productDetails}>
                                        <p>{item.name}</p>
                                        <div>
                                            <p>${item.price}.00</p>
                                            <p>{item.sizes[0]} size of shoe</p>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td className={classes.quantityTd}>
                                <div className={classes.quantityContainer}>
                                    <button>-</button>
                                    <p>1</p>
                                    <button>+</button>
                                </div>
                            </td>
                            <td>
                                <p className={classes.price}>$450.00</p>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
        <div className={classes.summary}>
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
    </div >
}