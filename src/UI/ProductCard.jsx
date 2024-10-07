import classes from '../components/Products/Products.module.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ProductCard({ id, image, alt, name, price, }) {
    return <motion.div
        className={classes.cardContainer}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ y: 30, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 50 }}>

        <Link to={`/products/${id}`} >
            <img src={image} alt={alt} className={classes.image} />
        </Link>
        <div className={classes.namePriceContainer}>
            <p className={classes.name}>{name}</p>
            <p className={classes.price}>${price}.00</p>
        </div>
    </motion.div >
}