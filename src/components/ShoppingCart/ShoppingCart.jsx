import classes from './ShoppingCart.module.css';
import { NEW_ARRIVALS } from '../../data';
import ShoppingCartItem from './ShoppingCartItem';
import Summary from './Summary';

export default function ShoppingCart() {
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
                        <ShoppingCartItem key={item} item={item} />
                    )}
                </tbody>
            </table>
        </div>
        <Summary />
    </div >
}