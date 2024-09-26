import classes from '../components/ProductDetails/ProductDetails.module.css';

export default function ShoeSize({ size, selectedSize, setSelectedSize, disabled }) {
    const isSelected = selectedSize == size;

    return <label
        className={`${isSelected ? classes.selectedSize : classes.size} ${disabled ? classes.disabled : ''}`}
        onClick={() => setSelectedSize(size)}>
        <input type='radio' name='size' className={classes.radio} checked={isSelected} disabled={disabled} onChange={() => {}} />
        {size}
    </label>
}