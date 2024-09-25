import classes from './Products.module.css';
import ProductCard from '../UI/ProductCard';
import NavButton from '../UI/NavigationButton';
import styles from './MainNavigation.module.css';
import filter from '../assets/filter.png';
import { NavbarContext } from '../context/NavBarContext';
import { useContext, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { fetchSneakers } from '../http';

export default function ProductsCollection() {

    const { toggleCategories, hideCategories } = useContext(NavbarContext);
    const { fetchedData: sneakers, isFetching, error } = useFetch(fetchSneakers, []);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                hideCategories();
            }
        };
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }, [hideCategories]);

    if (isFetching) return <p>Loading sneakers...</p>;
    if (error) return <p>{error.message}</p>;

    return <div>
        <div className={classes.headingContainer}>
            <p className={classes.heding}>Sneakers Collection</p>
            <NavButton
                styles={styles['icon-button']}
                image={filter}
                alt='categories logo'
                imgStyles={styles['icon-image']}
                onHandleClick={toggleCategories}
            />
        </div>
        <div className={classes.container}>
            {sneakers.map((sneaker) =>
                <ProductCard
                    key={sneaker.id}
                    id={sneaker.id}
                    alt={sneaker.name}
                    image={sneaker.photos[0]}
                    name={sneaker.name}
                    price={sneaker.price}
                />
            )}
        </div>

    </div>
}