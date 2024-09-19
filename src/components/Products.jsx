import classes from './Products.module.css';
import { NEW_ARRIVALS } from '../data';
import ProductCard from '../UI/ProductCard';

export default function ProductsCollection() {
    return <div>
        <h3 className={classes.heding}>Sneakers Collection</h3>
        <div className={classes.container}>
            {NEW_ARRIVALS.map((sneakers) =>
                <ProductCard
                    key={sneakers.id}
                    id={sneakers.id}
                    alt={sneakers.image.alt}
                    image={sneakers.image.src}
                    name={sneakers.name}
                    price={sneakers.price}
                />
            )}
        </div>

    </div>
}