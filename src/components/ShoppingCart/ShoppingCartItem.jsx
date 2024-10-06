import { useContext } from 'react';
import classes from './ShoppingCartItem.module.css';
import CartContext from '../../context/CartContext';

export default function ShoppingCartItem({ item }) {
    const { addItem, removeItem } = useContext(CartContext);

    const price = item.price * item.quantity;

    return <tr key={item.id}>
        <td>
            <div className={classes.product}>
                <img src={item.photos[0]} alt={item.name} />
                <div className={classes.productDetails}>
                    <p>{item.name}</p>
                    <div>
                        <p>${item.price}.00</p>
                        <p>{item.size} size of shoe</p>
                    </div>
                </div>
            </div>
        </td>

        <td>
            <div className={classes.quantityContainer}>
                <button onClick={() => removeItem(item.id, item.size)}>-</button>
                <p>{item.quantity}</p>
                <button onClick={() => addItem(item, item.size, item.quantity)}>+</button>
            </div>
        </td>
        <td>
            <p className={classes.price}>${price}.00</p>
        </td>
        
    </tr>
}