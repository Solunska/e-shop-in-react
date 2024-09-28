import classes from './Products.module.css';
import ProductCard from '../../UI/ProductCard';
import NavButton from '../../UI/NavigationButton';
import filter from '../../assets/filter.png';
import { NavbarContext } from '../../context/NavBarContext';
import { useContext, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { fetchSneakers } from '../../http';
import CartContext from '../../context/CartContext';
import Button from '../../UI/Button';
import Filters from './Filters'
import Modal from '../../UI/Modal';

export default function ProductsCollection() {
    const cartContext = useContext(CartContext);
    const { fetchedData: sneakers, isFetching, error } = useFetch(fetchSneakers, []);
    const { isFiltersModalOpen, setIsFiltersModalOpen } = useContext(NavbarContext);

    function handleAddItemToCart(item) {
        cartContext.addItem(item);
    }
    useEffect(() => {

        if (isFiltersModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isFiltersModalOpen]);

    const toggleFilter = () => setIsFiltersModalOpen(!isFiltersModalOpen);

    if (isFetching) return <p>Loading sneakers...</p>;
    if (error) return <p>{error.message}</p>;

    return <>
        <div className={classes.categories}>
            <Button variant="secondary" border="off" size='large'>Men</Button>
            <Button variant="secondary" border="off" size='large'>Women</Button>
            <Button variant="secondary" border="off" size='large'>Kids</Button>
        </div>
        <div className={classes.headingContainer}>
            <p className={classes.heding}>Sneakers Collection</p>
            <NavButton
                styles={classes.iconButton}
                image={filter}
                alt='categories logo'
                imgStyles={classes.iconImage}
                onHandleClick={() => toggleFilter()}
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
                    onHandleClick={() => handleAddItemToCart(sneaker)}
                />
            )}
        </div>

        <Modal open={isFiltersModalOpen} onClose={() => setIsFiltersModalOpen(false)} modalStyles={classes.modal}>
            <Filters />
        </Modal>
    </>
}