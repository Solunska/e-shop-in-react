import classes from './ShoppingCartItem.module.css';

export default function shoppingCartItem({item}) {
    return <tr key={item.id}>
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

        <td>
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
}