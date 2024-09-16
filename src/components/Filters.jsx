import { useContext } from 'react';
import Checkbox from './Checkbox';
import classes from './Filters.module.css';
import { NavbarContext } from '../context/NavBarContext';

export default function Filters() {

    const { showCategories } = useContext(NavbarContext);

    if (!showCategories) {
        return null; 
    }
    
    return <>
        <div className={classes.mainContainer}>
            <div className={classes.container}>
                <div>
                    <h3 className={classes.category}>Men&apos;s Comfy Sneakers</h3>
                    <Checkbox label="Everyday Comfrot" />
                    <Checkbox label="Athletic" />
                    <Checkbox label="Casual" />
                    <Checkbox label="Work-Friendly" />
                </div>
                <div>
                    <h3 className={classes.category}>Women&apos;s Comfy Sneakers</h3>
                    <Checkbox label="Everyday Comfrot" />
                    <Checkbox label="Athletic" />
                    <Checkbox label="Casual" />
                    <Checkbox label="Work-Friendly" />
                </div>
                <div>
                    <h3 className={classes.category}>Kid&apos;s Comfy Sneakers</h3>
                    <Checkbox label="Boys" />
                    <Checkbox label="Girls" />
                    <Checkbox label="Toddlers" />
                </div>
            </div>
            <div className={classes.container}>
                <div>
                    <h3 className={classes.category}>Sneaker Types</h3>
                    <Checkbox label="Slip-On" />
                    <Checkbox label="Lace-Up" />
                    <Checkbox label="High Tops" />
                    <Checkbox label="Low Tops" />
                </div>
                <div>
                    <h3 className={classes.category}>Seasonal Collections</h3>
                    <Checkbox label="Summer" />
                    <Checkbox label="Winter" />
                    <Checkbox label="Rain-Ready" />
                </div>
                <div>
                    <h3 className={classes.category}>New Arrivals</h3>
                    <Checkbox label="Latest Trends" />
                    <Checkbox label="Recently Launched" />
                </div>
                <div>
                    <h3 className={classes.category}>Sale</h3>
                    <Checkbox label="Discounts" />
                    <Checkbox label="Clearance" />
                </div>
            </div>
            <div className={classes.container}>
                <div>
                    <div className={classes.price}>
                        <h3 className={classes.category}>Price</h3>
                        <Checkbox label="Under $50" />
                        <Checkbox label="$50 - $100" />
                        <Checkbox label="$100 - $150" />
                        <Checkbox label="$150 - $200" />
                        <Checkbox label="$Above $200" />
                    </div>
                    <div>
                        <h3 className={classes.category}>Size</h3>
                        <Checkbox label="US Sizes" />
                        <Checkbox label="EU Sizes" />
                        <Checkbox label="UK Sizes" />
                        <Checkbox label="Half Sizes" />
                    </div>
                </div>
                <div><button>Search</button></div>
            </div>
        </div>
    </>
}