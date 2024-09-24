import classes from './Products.module.css';
import { NEW_ARRIVALS } from '../data';
import ProductCard from '../UI/ProductCard';
import NavButton from '../UI/NavigationButton';
import styles from './MainNavigation.module.css';
import filter from '../assets/filter.png';
import { NavbarContext } from '../context/NavBarContext';
import { useContext, useEffect } from 'react';

export default function ProductsCollection() {

    const { toggleCategories, hideCategories } = useContext(NavbarContext);

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