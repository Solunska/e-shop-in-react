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
import { useFilter } from '../../hooks/useFilter';
import { FiltersContext } from '../../context/FiltersContext';

export default function ProductsCollection() {
    const { addItem } = useContext(CartContext);
    const { fetchedData: sneakers, isFetching, error } = useFetch(fetchSneakers, []);
    const { isFiltersModalOpen, toggleFilters } = useModal();
    const { setSneakersData, filteredSneakers, applyFilters } = useFilter();
    const [selectedFilter] = useState(null);
    const { filters, handleFilterChange } = useContext(FiltersContext);

    useEffect(() => {
        if (sneakers.length > 0) {
            setSneakersData(sneakers);
        }
    }, [sneakers, setSneakersData]);

    function handleFilterMens() {
        handleFilterChange('gender', 'men');
    }

    function handleFilterWomen() {
        handleFilterChange('gender', 'women');
    }

    function handleFilterKids() {
        handleFilterChange('gender', 'kids');
    }

    useEffect(() => {
        applyFilters();
    }, [filters.gender]);

    if (isFetching) return <div className='loadingContainer'>
        <p className='loading'>Loading sneakers...</p>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>;
    if (error) return <p>{error.message}</p>;

    return <>
        <div className={classes.categories}>
            <Button variant="secondary" border="off" size='large' onHandleClick={handleFilterMens} className={selectedFilter === 'men' ? classes.selectedButton : ''} >Men</Button>
            <Button variant="secondary" border="off" size='large' onHandleClick={handleFilterWomen} className={selectedFilter === 'women' ? classes.selectedButton : ''}>Women</Button>
            <Button variant="secondary" border="off" size='large' onHandleClick={handleFilterKids} className={selectedFilter === 'kids' ? classes.selectedButton : ''}>Kids</Button>
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
                    onHandleClick={() => addItem(sneaker)}
                />
            )}
        </div>
        {isFiltersModalOpen ? <Modal open={isFiltersModalOpen} onClose={() => toggleFilters()} modalStyles={classes.modal}>
            <CloseButton onHandleClick={() => toggleFilters()} />
            <Filters applyFilters={applyFilters} toggleFilters={toggleFilters} />
        </Modal> : null}
    </>
}