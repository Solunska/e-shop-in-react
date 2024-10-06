import classes from './Filters.module.css';
import Checkbox from '../../UI/Checkbox';
import Button from '../../UI/Button';
import { useContext } from 'react';
import { FiltersContext } from '../../context/FiltersContext';

export default function Filters({ applyFilters, toggleFilters }) {
    const { filters, handleFilterChange, clearFilters } = useContext(FiltersContext);

    return <>
        <div className={classes.mainContainer}>
            <div className={classes.container}>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Brand</h3>
                    <Checkbox label="nike" checked={filters.brand === "nike"} type="radio" name="brand" onChange={(e) => handleFilterChange('brand', e.target.value)} />
                    <Checkbox label="adidas" checked={filters.brand === "adidas"} type="radio" name="brand" onChange={(e) => handleFilterChange('brand', e.target.value)} />
                    <Checkbox label="puma" checked={filters.brand === "puma"} type="radio" name="brand" onChange={(e) => handleFilterChange('brand', e.target.value)} />
                </div>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Material</h3>
                    <Checkbox label="leather" checked={filters.material.includes("leather")} type="checkbox" onChange={(e) => handleFilterChange('material', e.target.value)} />
                    <Checkbox label="seude" checked={filters.material.includes("seude")} type="checkbox" onChange={(e) => handleFilterChange('material', e.target.value)} />
                    <Checkbox label="mesh" checked={filters.material.includes("mesh")} type="checkbox" onChange={(e) => handleFilterChange('material', e.target.value)} />
                    <Checkbox label="recycled materials" checked={filters.material.includes("recycled materials")} type="checkbox" onChange={(e) => handleFilterChange('material', e.target.value)} />
                </div>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Sneaker Types</h3>
                    <Checkbox label="slip-on" checked={filters.sneakerTypes.includes("slip-on")} type="checkbox" onChange={(e) => handleFilterChange('sneakerTypes', e.target.value)} />
                    <Checkbox label="lace-up" checked={filters.sneakerTypes.includes("lace-up")} type="checkbox" onChange={(e) => handleFilterChange('sneakerTypes', e.target.value)} />
                    <Checkbox label="high tops" checked={filters.sneakerTypes.includes("high tops")} type="checkbox" onChange={(e) => handleFilterChange('sneakerTypes', e.target.value)} />
                    <Checkbox label="low tops" checked={filters.sneakerTypes.includes("low tops")} type="checkbox" onChange={(e) => handleFilterChange('sneakerTypes', e.target.value)} />
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Gender</h3>
                    <Checkbox label="men" checked={filters.genre === "men"} type="radio" name="gender" onChange={(e) => handleFilterChange('gender', e.target.value)} />
                    <Checkbox label="women" checked={filters.genre === "women"} type="radio" name="gender" onChange={(e) => handleFilterChange('gender', e.target.value)} />
                    <Checkbox label="kids" checked={filters.genre === "kids"} type="radio" name="gender" onChange={(e) => handleFilterChange('gender', e.target.value)} />
                </div>

                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Colour</h3>
                    <Checkbox label="black" checked={filters.color.includes("black")} type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="white" checked={filters.color.includes("white")} type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="brown" checked={filters.color.includes("brown")} type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="beige" checked={filters.color.includes("beige")} type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="grey" checked={filters.color.includes("grey")} type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="orange" checked={filters.color.includes("orange")} type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="blue" checked={filters.color.includes("blue")} type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="pink" checked={filters.color.includes("pink")} type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="green" checked={filters.color.includes("green")} type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                    <Checkbox label="multi-colour" checked={filters.color.includes("multi-colour")} type="checkbox" onChange={(e) => handleFilterChange('color', e.target.value)} />
                </div>
            </div>
            <div className={classes.container}>
                <div >
                    <div className={classes.price}>
                        <h3 className={classes.category}>Price</h3>
                        <Checkbox label="Under $50" checked={filters.price === "Under $50"} type="radio" name="price" onChange={(e) => handleFilterChange('price', e.target.value)} />
                        <Checkbox label="$50 - $100" checked={filters.price === "$50 - $100"} type="radio" name="price" onChange={(e) => handleFilterChange('price', e.target.value)} />
                        <Checkbox label="$100 - $150" checked={filters.price === "$100 - $150"} type="radio" name="price" onChange={(e) => handleFilterChange('price', e.target.value)} />
                        <Checkbox label="$150 - $200" checked={filters.price === "$150 - $200"} type="radio" name="price" onChange={(e) => handleFilterChange('price', e.target.value)} />
                        <Checkbox label="$Above $200" checked={filters.price === "$Above $200"} type="radio" name="price" onChange={(e) => handleFilterChange('price', e.target.value)} />
                    </div>
                    <div>
                        <h3 className={classes.category}>Sort by</h3>
                        <Checkbox label="popularity ascending" value="popularityA" checked={filters.sort === "popularityA"} type="radio" name="sort" onChange={(e) => handleFilterChange('sort', e.target.value)} />
                        <Checkbox label="popularity descending" value="popularityD" checked={filters.sort === "popularityD"} type="radio" name="sort" onChange={(e) => handleFilterChange('sort', e.target.value)} />
                        <Checkbox label="prices ascending" value="pricesA" checked={filters.sort === "pricesA"} type="radio" name="sort" onChange={(e) => handleFilterChange('sort', e.target.value)} />
                        <Checkbox label="prices descending" value="pricesD" checked={filters.sort === "pricesD"} type="radio" name="sort" onChange={(e) => handleFilterChange('sort', e.target.value)} />
                    </div>
                </div>
                <div className={classes.btnContainer}>
                    <Button variant='primary' onHandleClick={() => {
                        applyFilters()
                        toggleFilters()
                    }}>Search</Button>
                    <Button variant='secondary' onHandleClick={() => {
                        clearFilters()
                    }}>Clear Filters</Button>
                </div>
            </div>
        </div>
    </>
}