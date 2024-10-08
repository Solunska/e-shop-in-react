import { useContext } from "react";
import Button from "../../UI/Button";
import { FiltersContext } from "../../context/FiltersContext";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../hooks/useFilter";
import classes from './Categories.module.css'

export default function Categories() {
    const { filters, clearFilters } = useContext(FiltersContext);
    const { handleFilterKids, handleFilterMens, handleFilterWomen } = useFilter();
    const navigate = useNavigate();

    return <div className={classes.categories}>
        <Button
            variant="secondary"
            border="off"
            size='large'
            className={filters.gender === null ? classes.selectedButton : ''}
            onHandleClick={() => {
                navigate('/products');
                clearFilters();
            }}>All Products</Button>
        <Button
            variant="secondary"
            border="off"
            size='large'
            className={filters.gender === 'men' ? classes.selectedButton : ''}
            onHandleClick={() => {
                handleFilterMens();
                navigate('/products/mens');
            }}>Men</Button>
        <Button
            variant="secondary"
            border="off"
            size='large'
            className={filters.gender === 'women' ? classes.selectedButton : ''}
            onHandleClick={() => {
                handleFilterWomen();
                navigate('/products/womens');
            }}>Women</Button>
        <Button
            variant="secondary"
            border="off"
            size='large'
            className={filters.gender === 'kids' ? classes.selectedButton : ''}
            onHandleClick={() => {
                handleFilterKids();
                navigate('/products/kids');
            }}>Kids</Button>
    </div>
}