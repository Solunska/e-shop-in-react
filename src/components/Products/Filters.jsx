import { useContext } from 'react';
import classes from './Filters.module.css';
import { NavbarContext } from '../../context/NavBarContext';
import Checkbox from '../../UI/Checkbox';
import Button from '../../UI/Button';

export default function Filters() {

    const { showCategories } = useContext(NavbarContext);

    if (!showCategories) {
        return null;
    }

    return <>
        <div className={classes.mainContainer}>
            <div className={classes.container}>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Men&apos;s Comfy Sneakers</h3>
                    <Checkbox label="Everyday Comfrot" type="checkbox" />
                    <Checkbox label="Athletic" type="checkbox" />
                    <Checkbox label="Casual" type="checkbox" />
                    <Checkbox label="Work-Friendly" type="checkbox" />
                </div>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Women&apos;s Comfy Sneakers</h3>
                    <Checkbox label="Everyday Comfrot" type="checkbox" />
                    <Checkbox label="Athletic" type="checkbox" />
                    <Checkbox label="Casual" type="checkbox" />
                    <Checkbox label="Work-Friendly" type="checkbox" />
                </div>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Kid&apos;s Comfy Sneakers</h3>
                    <Checkbox label="Boys" type="checkbox" />
                    <Checkbox label="Girls" type="checkbox" />
                    <Checkbox label="Toddlers" type="checkbox" />
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Sneaker Types</h3>
                    <Checkbox label="Slip-On" type="checkbox" />
                    <Checkbox label="Lace-Up" type="checkbox" />
                    <Checkbox label="High Tops" type="checkbox" />
                    <Checkbox label="Low Tops" type="checkbox" />
                </div>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Seasonal Collections</h3>
                    <Checkbox label="Summer" type="checkbox" />
                    <Checkbox label="Winter" type="checkbox" />
                    <Checkbox label="Rain-Ready" type="checkbox" />
                </div>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>New Arrivals</h3>
                    <Checkbox label="Latest Trends" type="checkbox" />
                    <Checkbox label="Recently Launched" type="checkbox" />
                </div>
                <div className={classes.categoryContainer}>
                    <h3 className={classes.category}>Sale</h3>
                    <Checkbox label="Discounts" type="checkbox" />
                    <Checkbox label="Clearance" type="checkbox" />
                </div>
            </div>
            <div className={classes.container}>
                <div >
                    <div className={classes.price}>
                        <h3 className={classes.category}>Price</h3>
                        <Checkbox label="Under $50" type="radio" name="price" />
                        <Checkbox label="$50 - $100" type="radio" name="price" />
                        <Checkbox label="$100 - $150" type="radio" name="price" />
                        <Checkbox label="$150 - $200" type="radio" name="price" />
                        <Checkbox label="$Above $200" type="radio" name="price" />
                    </div>
                    <div>
                        <h3 className={classes.category}>Sort by</h3>
                        <Checkbox label="popularity" type="radio" name="sort" />
                        <Checkbox label="prices" type="radio" name="sort" />
                        <Checkbox label="newest arrivals" type="radio" name="sort" />
                        <Checkbox label="newest arrivals" type="radio" name="sort" />
                    </div>
                </div>
                <div>
                    <Button classes={classes.searchButton}>Search </Button>
                </div>
            </div>
        </div>
    </>
}