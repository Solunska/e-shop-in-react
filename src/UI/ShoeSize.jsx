import classes from '../components/ProductDetails.module.css';

export default function ShoeSize({ size, selectedSize, setSelectedSize }) {
    const isSelected = selectedSize == size;

    return <label className={isSelected ? classes.selectedSize : classes.size} onClick={() => setSelectedSize(size)}>
        <input type='radio' name='size' className={classes.radio} checked={isSelected}/>
        {size}
    </label>
}