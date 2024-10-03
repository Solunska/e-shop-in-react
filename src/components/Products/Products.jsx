import classes from './Products.module.css';
import ProductCard from '../../UI/ProductCard';
import NavButton from '../../UI/NavigationButton';
import filter from '../../assets/filter.png';
import { useContext, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { fetchSneakers } from '../../http';
import CartContext from '../../context/CartContext';
import Button from '../../UI/Button';
import Filters from './Filters'
import Modal from '../../UI/Modal';
import CloseButton from '../../UI/CloseButton';
import { useModal } from '../../hooks/useModal';
import { useFilter } from '../../hooks/useFilter';
import { FiltersContext } from '../../context/FiltersContext';
import Loading from '../../UI/Loading';

export default function ProductsCollection() {
    const { addItem } = useContext(CartContext);
    const { fetchedData: sneakers, isFetching, error } = useFetch(fetchSneakers, []);
    const { isFiltersModalOpen, toggleFilters } = useModal();
    const { setSneakersData, filteredSneakers, applyFilters, handleFilterKids, handleFilterMens, handleFilterWomen } = useFilter();
    const { filters, clearFilters } = useContext(FiltersContext);

    useEffect(() => {
        if (sneakers.length > 0) {
            setSneakersData(sneakers);
        }
    }, [sneakers, setSneakersData]);

    useEffect(() => {
        switch (location.pathname) {
            case '/mens':
                handleFilterMens();
                break;
            case '/womens':
                handleFilterWomen();
                break;
            case '/kids':
                handleFilterKids();
                break;
            case '/products':
                clearFilters();
                break;
            default:
                break;
        }
        applyFilters(); // Apply filters after setting the category
    }, [clearFilters, applyFilters, handleFilterMens, handleFilterWomen, handleFilterKids]);

    if (isFetching) return <Loading text="Loading sneakers..." />
    if (error) return <p>{error.message}</p>;

    return <>
        <div className={classes.categories}>
            <Button variant="secondary" border="off" size='large' onHandleClick={handleFilterMens} className={filters.gender === 'men' ? classes.selectedButton : ''} >Men</Button>
            <Button variant="secondary" border="off" size='large' onHandleClick={handleFilterWomen} className={filters.gender === 'women' ? classes.selectedButton : ''}>Women</Button>
            <Button variant="secondary" border="off" size='large' onHandleClick={handleFilterKids} className={filters.gender === 'kids' ? classes.selectedButton : ''}>Kids</Button>
        </div>
        <div className={classes.headingContainer}>
            <p className={classes.heding}>Sneakers Collection</p>
            <NavButton
                styles={classes.iconButton}
                image={filter}
                alt='categories logo'
                imgStyles={classes.iconImage}
                onHandleClick={() => toggleFilters()} />
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
                    onHandleClick={() => addItem(sneaker)} />)}
        </div>
        {isFiltersModalOpen ? <Modal open={isFiltersModalOpen} onClose={() => toggleFilters()} modalStyles={classes.modal}>
            <CloseButton onHandleClick={() => toggleFilters()} />
            <Filters applyFilters={applyFilters} toggleFilters={toggleFilters} />
        </Modal> : null}
    </>
}