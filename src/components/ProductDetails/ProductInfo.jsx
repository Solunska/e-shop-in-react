import Button from '../../UI/Button'
import classes from './ProductInfo.module.css'
import Stars from './Stars'
import ShoeSizes from './ShoeSizes'
import { useContext, useRef } from 'react';
import CartContext from '../../context/CartContext';
import Modal from '../../UI/Modal';
import Input from '../../UI/Input'

export default function ProductInfo({ item, averageRating, reviewCount, availableSizes, predefinedSizes, selectedSize, setSelectedSize }) {
    const { addItem, setIsQuantityModalOpen, isQuantityModalOpen } = useContext(CartContext);
    const inputRef = useRef();

    function handleAddItemToCart(item, size, quantity) {
        addItem(item, size, quantity);
    }

    function toggleQuantityModal() {
        setIsQuantityModalOpen(!isQuantityModalOpen)
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
        <Button classes={classes.button} onHandleClick={() => toggleQuantityModal()}>Add to cart</Button>
        {isQuantityModalOpen && (
            <Modal open={isQuantityModalOpen} onClose={() => setIsQuantityModalOpen(false)} modalStyles={classes.modal}>
                <button className={classes.closeButton} onClick={() => setIsQuantityModalOpen(false)}>
                    &times;
                </button>
                <Input label="Set quantity" type="number" name="quantity" ref={inputRef} />
                <div>
                    <Button classes={classes.buttonSecondary} onHandleClick={() => setIsQuantityModalOpen(false)}>Cancel</Button>
                    <Button classes={classes.buttonPrimary} onHandleClick={() => {
                        handleAddItemToCart(item, selectedSize, inputRef.current.value)
                        setIsQuantityModalOpen(false)
                    }
                    }>OK</Button>
                </div>
            </Modal>
        )}
    </div>
}