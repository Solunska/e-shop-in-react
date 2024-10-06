import classes from './ShoppingCart.module.css';
import ShoppingCartItem from './ShoppingCartItem';
import Summary from './Summary';
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import Button from '../../UI/Button';

export default function ShoppingCart() {
    const { items, clearCart } = useContext(CartContext);

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
                    {items.map(item =>
                        <ShoppingCartItem key={item} item={item} />
                    )}
                </tbody>
            </table>
        </div>
        <div>
            <Button variant='primary' size='medium' className={classes.clearCart} onHandleClick={clearCart}>Clear cart</Button>
        </div>
        <Summary />
    </div >
}