import { useParams } from "react-router-dom";
import classes from './ProductDetails.module.css';
import { useFetch } from "../../hooks/useFetch";
import { fetchSneakers } from "../../http";
import { useState } from "react";
import ProductInfo from "./ProductInfo";
import ProductPhotos from "./ProductPhotos";
import { useProductSizes } from "../../hooks/useProductSizes";
import { useProductReviews } from "../../hooks/useProductReviews";
import Description from "./Description";
import SideBar from "./SideBar";

const predefinedSizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

export default function ProductDetails() {
    const { productId } = useParams();
    const [selectedPhoto, setSelectedPhoto] = useState(0);
    const { fetchedData: sneakers, isFetching, error } = useFetch(fetchSneakers, []);

    const item = sneakers.find(item => item.id == productId);

    const { selectedSize, setSelectedSize, availableSizes } = useProductSizes(item);
    const { averageRatingFullNumber, averageRating, percentageStars, reviewCount } = useProductReviews(item?.reviews || {});

    if (isFetching) return <p>Loading sneakers...</p>;
    if (error) return <p>{error.message}</p>;

    if (!item) {
        return <p>Product not found</p>;
    }

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
            <Description description={item.details} />
            <SideBar averageRating={averageRating} averageRatingFullNumber={averageRatingFullNumber} percentageStars={percentageStars} />
        </div>
    </>
}