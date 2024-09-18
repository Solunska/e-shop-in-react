import Button from "./Button";
import classes from '../components/Products.module.css';

export default function ProductCard({ id, image, alt, name, price }) {
    return <div className={classes.cardContainer}>
        <img src={image} alt={alt} className={classes.image} />
        <div className={classes.namePriceContainer}>
            <p className={classes.name}>{name}</p>
            <p className={classes.price}>${price}.00</p>
        </div>
        <Button classes={classes.button} key={id}>View Product</Button>
    </div>
}