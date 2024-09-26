import ShoeSize from '../../UI/ShoeSize'
import classes from './ShoeSizes.module.css'

export default function ShoeSizes({predefinedSizes, selectedSize, setSelectedSize, availableSizes}) {
    return <div>
        <p className={classes.label}>Size</p>
        <div className={classes.sizes}>
            {predefinedSizes.map(size =>
                <ShoeSize
                    key={size}
                    size={size}
                    selectedSize={selectedSize}
                    setSelectedSize={setSelectedSize}
                    disabled={!availableSizes.includes(size)}
                />)}
        </div>
    </div>
}