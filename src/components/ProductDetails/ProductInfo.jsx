import Button from '../../UI/Button'
import classes from './ProductInfo.module.css'
import Stars from './Stars'
import ShoeSizes from './ShoeSizes'
import { useContext, useState } from 'react';
import CartContext from '../../context/CartContext';

export default function ProductInfo({ item, averageRating, reviewCount, availableSizes, predefinedSizes, selectedSize, setSelectedSize }) {
    const { addItem } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);


    function handleAddItemToCart(item, size, quantity) {
        addItem(item, size, quantity);
    }

    function decreaseQuantity() {
        if (quantity == 1) {
            return null
        } else {
            setQuantity(quantity - 1)
        }
    }

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
        <div className={classes.addToCartContainer}>
            <Button
                variant="primary"
                size="large"
                onHandleClick={() => handleAddItemToCart(item, selectedSize, quantity)}>Add to cart</Button>
            <div className={classes.quantityContainer}>
                <button onClick={() => decreaseQuantity()}>-</button>
                <p>{quantity}</p>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
        </div>
    </div>
}