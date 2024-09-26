import Button from '../../UI/Button'
import classes from './ProductInfo.module.css'
import Stars from './Stars'
import ShoeSizes from './ShoeSizes'

export default function ProductInfo({item, averageRating, reviewCount, availableSizes, predefinedSizes, selectedSize, setSelectedSize}) {
    return <div className={classes.productInfoContainer}>
        <div className={classes.nameRatingContainer}>
            <p className={classes.name}>{item.name}</p>
            <Stars
                averageRating={averageRating}
                containerClass={classes.reviewsContainer}
                label={`${reviewCount} reviews`}
                labelClass={classes.reviews}
                size="24px" />
        </div>
        <p className={classes.price}>${item.price}.00</p>
        <ShoeSizes
            availableSizes={availableSizes}
            predefinedSizes={predefinedSizes}
            selectedSize={selectedSize}
            setSelectedSize={setSelectedSize} />
        <Button classes={classes.button}>Add to cart</Button>
    </div>
}