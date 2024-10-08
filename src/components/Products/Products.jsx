import classes from './Products.module.css';
import ProductCard from '../../UI/ProductCard';
import { useContext, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { fetchSneakers } from '../../http';
import CartContext from '../../context/CartContext';
import { useFilter } from '../../hooks/useFilter';
import Loading from '../../UI/Loading';

export default function ProductsCollection() {
    const { addItem } = useContext(CartContext);
    const { fetchedData: sneakers, isFetching, error } = useFetch(fetchSneakers, []);
    const { setSneakersData, filteredSneakers } = useFilter();

    useEffect(() => {
        if (sneakers.length > 0) {
            setSneakersData(sneakers);
        }
    }, [sneakers, setSneakersData]);

    if (isFetching) return <Loading text="Loading sneakers..." />
    if (error) return <p>{error.message}</p>;

    if(filteredSneakers.length===0){
        return <div className={classes.noProducts}>
            <p>No products with the selected filters.</p>
            <p>Try clearing up the filters or removing some of them.</p>
        </div>
    }

    return <>
        <div className={classes.container}>
            {filteredSneakers.map((sneaker) =>
                <ProductCard
                    key={sneaker.id}
                    id={sneaker.id}
                    alt={sneaker.name}
                    image={sneaker.photos[0]}
                    name={sneaker.name}
                    price={sneaker.price}
                    onHandleClick={() => addItem(sneaker)} />)}
        </div>
    </>
}