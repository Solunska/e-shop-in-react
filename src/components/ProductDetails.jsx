import { useParams } from "react-router-dom";
import { NEW_ARRIVALS } from "../data";
import classes from './ProductDetails.module.css';
import ShoeSize from "../UI/ShoeSize";
import Button from "../UI/Button";
import StarIcon from "../UI/Star";
import comfortImg from '../assets/comfort.png';
import recycleImg from '../assets/recycle.png';
import returnImg from '../assets/return.png';
import { useState } from "react";
import ProgressBar from "../UI/ProgressBar";
import LogoLabel from "../UI/LogoLabel";

export default function Product() {
    const { productId } = useParams();
    const [selectedSize, setSelectedSize] = useState(35)

    const item = NEW_ARRIVALS.find(item => item.id == productId);
    const reviewCount = Object.values(item.reviews).reduce((count, reviews) => count + reviews, 0);
    const totalScore = Object.entries(item.reviews).reduce((total, [stars, count]) => total + (count * (stars + 1)), 0);
    const averageRatingFullNumber = (totalScore / reviewCount).toFixed(0);
    const averageRating = (totalScore / reviewCount).toFixed(1);

    return <>
        <div className={classes.container}>
            <div className={classes.productInfoContainer}>
                <div className={classes.nameRatingContainer}>
                    <p className={classes.name}>{item.name}</p>
                    <div className={classes.reviewsContainer}>
                        <div className={classes.stars}>
                            <StarIcon starClass={classes.starYellow} size="24px" />
                            <StarIcon starClass={averageRatingFullNumber >= 2 ? classes.starYellow : classes.starGray} size="24px" />
                            <StarIcon starClass={averageRatingFullNumber >= 3 ? classes.starYellow : classes.starGray} size="24px" />
                            <StarIcon starClass={averageRatingFullNumber >= 4 ? classes.starYellow : classes.starGray} size="24px" />
                            <StarIcon starClass={averageRatingFullNumber == 5 ? classes.starYellow : classes.starGray} size="24px" />
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
        <div className={classes.bottomContainer}>
            <div className={classes.description}>
                <p>Product description</p>
                <p>{item.description}</p>
            </div>
            <div className={classes.sideBar}>
                <div className={classes.rating}>
                    <div className={classes.starsRatingContainer}>
                        <div className={classes.stars}>
                            <StarIcon starClass={classes.starYellow} size="35px" />
                            <StarIcon starClass={averageRatingFullNumber >= 2 ? classes.starYellow : classes.starGray} size="35px" />
                            <StarIcon starClass={averageRatingFullNumber >= 3 ? classes.starYellow : classes.starGray} size="35px" />
                            <StarIcon starClass={averageRatingFullNumber >= 4 ? classes.starYellow : classes.starGray} size="35px" />
                            <StarIcon starClass={averageRatingFullNumber == 5 ? classes.starYellow : classes.starGray} size="35px" />
                        </div>
                        <p>{averageRating}</p>
                    </div>
                    <div className={classes.progressBarsContainer}>
                        <ProgressBar number={5} percentege={20} />
                        <ProgressBar number={4} percentege={50} />
                        <ProgressBar number={3} percentege={40} />
                        <ProgressBar number={2} percentege={10} />
                        <ProgressBar number={1} percentege={20} />
                    </div>
                </div>
                <div className={classes.benefits}>
                    <LogoLabel logo={comfortImg} label="All-Day Comfort" containerClass={classes.logoLabelContainer}/>
                    <LogoLabel logo={recycleImg} label="Eco-Friendly" containerClass={classes.logoLabelContainer}/>
                    <LogoLabel logo={returnImg} label="Hassle-Free Returns" containerClass={classes.logoLabelContainer}/>
                </div>
            </div>
        </div>
    </>
}