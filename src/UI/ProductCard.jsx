import Button from "./Button";
import classes from '../components/Products/Products.module.css';
import { Link } from "react-router-dom";

export default function ProductCard({ id, image, alt, name, price }) {
    return <div className={classes.cardContainer}>
        <Link key={id} to={`/products/${id}`} >
            <img src={image} alt={alt} className={classes.image} />
        </Link>
        <div className={classes.namePriceContainer}>
            <p className={classes.name}>{name}</p>
            <p className={classes.price}>${price}.00</p>
        </div>

        <Button classes={classes.button} key={id}>Buy</Button>

    </div >
}