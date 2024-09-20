import { useParams } from "react-router-dom";
import { NEW_ARRIVALS } from "../data";
import classes from './Product.module.css';
import ShoeSize from "../UI/ShoeSize";
import Button from "../UI/Button";
import StarIcon from "../UI/Star";
import { useState } from "react";

export default function Product() {
    const { productId } = useParams();
    const [selectedSize, setSelectedSize] = useState(35)

    const item = NEW_ARRIVALS.find(item => item.id == productId);
    const reviewCount = Object.values(item.reviews).reduce((count, reviews) => count + reviews, 0);
    const totalScore = Object.entries(item.reviews).reduce((total, [stars, count]) => total + (count * (stars + 1)), 0);
    const averageRating = (totalScore / reviewCount).toFixed(0);

    return <div className={classes.container}>
        <div className={classes.productInfoContainer}>
            <div className={classes.nameRatingContainer}>
                <p className={classes.name}>{item.name}</p>
                <div className={classes.reviewsContainer}>
                    <div className={classes.stars}>
                        <StarIcon starClass={classes.starYellow} />
                        <StarIcon starClass={averageRating >= 2 ? classes.starYellow : classes.starGray} />
                        <StarIcon starClass={averageRating >= 3 ? classes.starYellow : classes.starGray} />
                        <StarIcon starClass={averageRating >= 4 ? classes.starYellow : classes.starGray} />
                        <StarIcon starClass={averageRating == 5 ? classes.starYellow : classes.starGray} />
                    </div>
                    <p className={classes.reviews}>{reviewCount} reviews</p>
                </div>
            </div>
            <p className={classes.price}>${item.price}.00</p>
            <div className={classes.sizesContainer}>
                <p className={classes.label}>Size</p>
                <div className={classes.sizes}>
                    {item.sizes.map(size => <ShoeSize
                        key={size}
                        size={size}
                        selectedSize={selectedSize}
                        setSelectedSize={setSelectedSize} />)}
                </div>
            </div>
            <Button classes={classes.button}>Add to cart</Button>
        </div>
        <div className={classes.imagesContainer}>
            <div className={classes.sideImages}>
                <img src={item.image.src} alt={item.image.alt} className={classes.image} />
                <img src={item.image.src} alt={item.image.alt} className={classes.image} />
                <img src={item.image.src} alt={item.image.alt} className={classes.image} />
                <img src={item.image.src} alt={item.image.alt} className={classes.image} />
            </div>
            <div className={classes.mainImage}>
                <img src={item.image.src} alt={item.image.alt} />
            </div>
        </div>
    </div>


}