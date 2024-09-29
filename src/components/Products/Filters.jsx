import classes from './Filters.module.css';
import Checkbox from '../../UI/Checkbox';
import Button from '../../UI/Button';
import { useContext } from 'react';
import { FiltersContext } from '../../context/FiltersContext';

export default function Filters() {
    const { handleFilterChange, applyFilters } = useContext(FiltersContext);

    return <>
        <div className={classes.mainContainer}>
            <div className={classes.container}>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Brand</h3>
                    <Checkbox label="Nike" type="checkbox" onChange={(e) => handleFilterChange('brand', e.target.value)} />
                    <Checkbox label="Adidas" type="checkbox" onChange={(e) => handleFilterChange('brand', e.target.value)} />
                    <Checkbox label="Puma" type="checkbox" onChange={(e) => handleFilterChange('brand', e.target.value)} />
                    <Checkbox label="Converse" type="checkbox" onChange={(e) => handleFilterChange('brand', e.target.value)} />
                    <Checkbox label="New Balance" type="checkbox" onChange={(e) => handleFilterChange('brand', e.target.value)} />
                </div>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Material</h3>
                    <Checkbox label="Leather" type="checkbox" onChange={(e) => handleFilterChange('material', e.target.value)} />
                    <Checkbox label="Suede" type="checkbox" onChange={(e) => handleFilterChange('material', e.target.value)} />
                    <Checkbox label="Mesh" type="checkbox" onChange={(e) => handleFilterChange('material', e.target.value)} />
                    <Checkbox label="Recycled materials" type="checkbox" onChange={(e) => handleFilterChange('material', e.target.value)} />
                </div>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Sneaker Types</h3>
                    <Checkbox label="Slip-On" type="checkbox" onChange={(e) => handleFilterChange('sneakerTypes', e.target.value)} />
                    <Checkbox label="Lace-Up" type="checkbox" onChange={(e) => handleFilterChange('sneakerTypes', e.target.value)} />
                    <Checkbox label="High Tops" type="checkbox" onChange={(e) => handleFilterChange('sneakerTypes', e.target.value)} />
                    <Checkbox label="Low Tops" type="checkbox" onChange={(e) => handleFilterChange('sneakerTypes', e.target.value)} />
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Customer Reviews</h3>
                    <Checkbox label="4 stars & up" type="radio" onChange={(e) => handleFilterChange('customerReviews', e.target.value)} />
                    <Checkbox label="3 stars & up" type="radio" onChange={(e) => handleFilterChange('customerReviews', e.target.value)} />
                    <Checkbox label="2 stars & up" type="radio" onChange={(e) => handleFilterChange('customerReviews', e.target.value)} />
                    <Checkbox label="1 star & up" type="radio" onChange={(e) => handleFilterChange('customerReviews', e.target.value)} />
                </div>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>New Arrivals</h3>
                    <Checkbox label="Latest Trends" type="checkbox" onChange={(e) => handleFilterChange('newArrivals', e.target.value)} />
                    <Checkbox label="Recently Launched" type="checkbox" onChange={(e) => handleFilterChange('newArrivals', e.target.value)} />
                </div>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Colour</h3>
                    <Checkbox label="Black" type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="White" type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="Blue" type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="Pink" type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="Green" type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="Multi-Colour" type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                </div>
            </div>
            <div className={classes.container}>
                <div >
                    <div className={classes.price}>
                        <h3 className={classes.category}>Price</h3>
                        <Checkbox label="Under $50" type="radio" name="price" onChange={(e) => handleFilterChange('price', e.target.value)} />
                        <Checkbox label="$50 - $100" type="radio" name="price" onChange={(e) => handleFilterChange('price', e.target.value)} />
                        <Checkbox label="$100 - $150" type="radio" name="price" onChange={(e) => handleFilterChange('price', e.target.value)} />
                        <Checkbox label="$150 - $200" type="radio" name="price" onChange={(e) => handleFilterChange('price', e.target.value)} />
                        <Checkbox label="$Above $200" type="radio" name="price" onChange={(e) => handleFilterChange('price', e.target.value)} />
                    </div>
                    <div>
                        <h3 className={classes.category}>Sort by</h3>
                        <Checkbox label="popularity" type="radio" name="sort" onChange={(e) => handleFilterChange('sort', e.target.value)} />
                        <Checkbox label="prices" type="radio" name="sort" onChange={(e) => handleFilterChange('sort', e.target.value)} />
                        <Checkbox label="newest arrivals" type="radio" name="sort" onChange={(e) => handleFilterChange('sort', e.target.value)} />
                        <Checkbox label="newest arrivals" type="radio" name="sort" onChange={(e) => handleFilterChange('sort', e.target.value)} />
                    </div>
                </div>
                <div>
                    <Button classes={classes.searchButton} onHandleClick={applyFilters}  >Search</Button>
                </div>
            </div>
        </div>
    </>
}