import Button from '../../UI/Button';
import classes from './ProductInfo.module.css';
import Stars from './Stars';
import ShoeSizes from './ShoeSizes';
import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext';
import { useQuantity } from '../../hooks/useQuantity';
import Alert from '../../UI/Alert';

export default function ProductInfo({ item, averageRating, reviewCount, availableSizes, predefinedSizes, selectedSize, setSelectedSize }) {
    const { addItem } = useContext(CartContext);
    const { increaseQuantity, decreaseQuantity, quantity } = useQuantity();
    const [alertMessage, setAlertMessage] = useState('');

    useEffect(() => {
        if (alertMessage) {
            const timer = setTimeout(() => {
                setAlertMessage('');
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [alertMessage]);

    const handleAddToCart = () => {
        addItem(item, selectedSize, quantity);
        setAlertMessage(`Added ${quantity} ${item.name} to the cart!`);
    };

    return (
        <div className={classes.productInfoContainer}>
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
                        onHandleClick={handleAddToCart}>
                        Add to cart
                    </Button>
                </div>
            </div>
            {alertMessage && <Alert
                className={classes.alert}
                message={alertMessage}
                onClose={() => setAlertMessage('')} />}
        </div>
    );
}
