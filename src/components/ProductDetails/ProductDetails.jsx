import { useParams } from "react-router-dom";
import classes from './ProductDetails.module.css';
import ShoeSize from "../../UI/ShoeSize";
import Button from "../../UI/Button";
import StarIcon from "../../UI/Star";
import comfortImg from '../../assets/comfort.png';
import recycleImg from '../../assets/recycle.png';
import returnImg from '../../assets/return.png';
import ProgressBar from "../../UI/ProgressBar";
import LogoLabel from "../../UI/LogoLabel";
import { useFetch } from "../../hooks/useFetch";
import { fetchSneakers } from "../../http";
import { useEffect, useMemo, useState } from "react";

const predefinedSizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

export default function Product() {
    const { productId } = useParams();
    const [selectedSize, setSelectedSize] = useState(35);
    const [selectedPhoto, setSelectedPhoto] = useState(0);

    const { fetchedData: sneakers, isFetching, error } = useFetch(fetchSneakers, []);

    const item = sneakers.find(item => item.id == productId);
    const availableSizes = useMemo(() => Array.isArray(item?.sizes) ? item.sizes : [], [item]);

    useEffect(() => {
        if (availableSizes.length > 0) {
            setSelectedSize(availableSizes[0]);
        }
    }, [availableSizes]);

    if (isFetching) return <p>Loading sneakers...</p>;
    if (error) return <p>{error.message}</p>;

    if (!item) {
        return <p>Product not found</p>;
    }

    const reviewCount = Object.values(item.reviews).reduce((count, reviews) => count + reviews, 0);

    const percentageStars = {};
    for (let star = 1; star <= 5; star++) {
        const count = item.reviews[star] || 0;
        percentageStars[star] = (reviewCount > 0 ? (count / reviewCount) * 100 : 0).toFixed(0);
    }

    const totalScore = Object.entries(item.reviews).reduce((total, [stars, count]) => total + (count * stars), 0);
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
                        {predefinedSizes.map(size => <ShoeSize
                            key={size}
                            size={size}
                            selectedSize={selectedSize}
                            setSelectedSize={setSelectedSize}
                            disabled={!availableSizes.includes(size)} />)}
                    </div>
                </div>
                <Button classes={classes.button}>Add to cart</Button>
            </div>
            <div className={classes.imagesContainer}>
                <div className={classes.sideImages}>
                    {item.photos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            alt={`${item.name} view ${index + 1}`}
                            className={(selectedPhoto == index) ? classes.selectedImage : classes.image}
                            onClick={() => setSelectedPhoto(index)}
                            selected={selectedPhoto == index} />
                    ))}
                </div>
                <div className={classes.mainImage}>
                    <img src={item.photos[selectedPhoto]} alt={item.name} />
                </div>
            </div>
        </div>
        <div className={classes.bottomContainer}>
            <div className={classes.description}>
                <p>Product description</p>
                <p>{item.details}</p>
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
                        <ProgressBar number={5} percentege={percentageStars[5]} />
                        <ProgressBar number={4} percentege={percentageStars[4]} />
                        <ProgressBar number={3} percentege={percentageStars[3]} />
                        <ProgressBar number={2} percentege={percentageStars[2]} />
                        <ProgressBar number={1} percentege={percentageStars[1]} />
                    </div>
                </div>
                <div className={classes.benefits}>
                    <LogoLabel logo={comfortImg} label="All-Day Comfort" containerClass={classes.logoLabelContainer} />
                    <LogoLabel logo={recycleImg} label="Eco-Friendly" containerClass={classes.logoLabelContainer} />
                    <LogoLabel logo={returnImg} label="Hassle-Free Returns" containerClass={classes.logoLabelContainer} />
                </div>
            </div>
        </div>
    </>
}