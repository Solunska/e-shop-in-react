import Button from '../../UI/Button'
import classes from './ProductInfo.module.css'
import Stars from './Stars'
import ShoeSizes from './ShoeSizes'
import { useContext } from 'react';
import CartContext from '../../context/CartContext';
import { useQuantity } from '../../hooks/useQuantity';
import { useModal } from '../../hooks/useModal';

export default function ProductInfo({ item, averageRating, reviewCount, availableSizes, predefinedSizes, selectedSize, setSelectedSize }) {
    const { addItem } = useContext(CartContext);
    const { increaseQuantity, decreaseQuantity, quantity } = useQuantity();
    const { isAlertOpen, toggleAlert } = useModal();

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
        <div>
            <p className={classes.quantity}>Choose quantity</p>
            <div className={classes.addToCartContainer}>
                <div className={classes.quantityContainer}>
                    <button onClick={() => decreaseQuantity()}>-</button>
                    <p>{quantity}</p>
                    <button onClick={() => increaseQuantity()}>+</button>
                </div>
                <Button
                    variant="primary"
                    size="large"
                    onHandleClick={() => {
                        addItem(item, selectedSize, quantity)
                        toggleAlert();
                    }}>Add to cart
                </Button>
            </div>
        </div>
        {isAlertOpen ?
            <div className="alert alert-success" role="alert">
                <p className='mb-0'>Added <strong>{quantity} {item.name}</strong> to the cart!</p>
            </div>
            : null}
    </div>
}