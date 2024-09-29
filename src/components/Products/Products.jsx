import classes from './Products.module.css';
import ProductCard from '../../UI/ProductCard';
import NavButton from '../../UI/NavigationButton';
import filter from '../../assets/filter.png';
import { useContext, useEffect, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { fetchSneakers } from '../../http';
import CartContext from '../../context/CartContext';
import Button from '../../UI/Button';
import Filters from './Filters'
import Modal from '../../UI/Modal';
import CloseButton from '../../UI/CloseButton';
import { useModal } from '../../hooks/useModal';

export default function ProductsCollection() {
    const cartContext = useContext(CartContext);
    const { fetchedData: sneakers, isFetching, error } = useFetch(fetchSneakers, []);
    const [filteredSneakers, setFilteredSneakers] = useState([]);
    const { isFiltersModalOpen, toggleFilters } = useModal();

    useEffect(() => {
        if (sneakers.length > 0) {
            setFilteredSneakers(sneakers); // Initially display all sneakers
        }
    }, [sneakers]);

    function handleAddItemToCart(item) {
        cartContext.addItem(item);
    }

    function filterMens() {
        const menSneakers = sneakers.filter(item => item.gender === 'men');
        setFilteredSneakers(menSneakers);
    }

    function filterWomen() {
        const womenSneakers = sneakers.filter(item => item.gender === 'women');
        setFilteredSneakers(womenSneakers);
    }

    if (isFetching) return <p>Loading sneakers...</p>;
    if (error) return <p>{error.message}</p>;

    return <>
        <div className={classes.categories}>
            <Button variant="secondary" border="off" size='large' onHandleClick={() => filterMens()}>Men</Button>
            <Button variant="secondary" border="off" size='large' onHandleClick={() => filterWomen()}>Women</Button>
            <Button variant="secondary" border="off" size='large'>Kids</Button>
        </div>
        <div className={classes.headingContainer}>
            <p className={classes.heding}>Sneakers Collection</p>
            <NavButton
                styles={classes.iconButton}
                image={filter}
                alt='categories logo'
                imgStyles={classes.iconImage}
                onHandleClick={() => toggleFilters()}
            />
        </div>
        <div className={classes.container}>
            {filteredSneakers.map((sneaker) =>
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
        {isFiltersModalOpen ? <Modal open={isFiltersModalOpen} onClose={() => toggleFilters()} modalStyles={classes.modal}>
            <CloseButton onHandleClick={() => toggleFilters()} />
            <Filters />
        </Modal> : null}

    </>
}