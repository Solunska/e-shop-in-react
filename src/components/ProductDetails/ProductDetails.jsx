import { useParams } from "react-router-dom";
import classes from './ProductDetails.module.css';
import comfortImg from '../../assets/comfort.png';
import recycleImg from '../../assets/recycle.png';
import returnImg from '../../assets/return.png';
import LogoLabel from "../../UI/LogoLabel";
import { useFetch } from "../../hooks/useFetch";
import { fetchSneakers } from "../../http";
import { useEffect, useMemo, useState } from "react";
import Stars from "./Stars";
import ProductInfo from "./ProductInfo";
import ProductPhotos from "./ProductPhotos";
import RatingBar from "./RatingBar";

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
            <ProductInfo
                item={item}
                averageRating={averageRatingFullNumber}
                reviewCount={reviewCount}
                availableSizes={availableSizes}
                predefinedSizes={predefinedSizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize} />
            <ProductPhotos
                item={item}
                selectedPhoto={selectedPhoto}
                setSelectedPhoto={setSelectedPhoto} />
        </div>
        <div className={classes.bottomContainer}>
            <div className={classes.description}>
                <p>Product description</p>
                <p>{item.details}</p>
            </div>
            <div className={classes.sideBar}>
                <div className={classes.rating}>
                    <Stars
                        averageRating={averageRatingFullNumber}
                        containerClass={classes.starsRatingContainer}
                        label={averageRating}
                        size="35px"
                    />
                    <RatingBar percentageStars={percentageStars} />
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