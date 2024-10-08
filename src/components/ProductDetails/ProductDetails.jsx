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
import notfound from '../../assets/not-found.png'
import Loading from "../../UI/Loading";
import NotFound from "../../UI/NotFound";
import { PREDEFINED_SIZES, KIDS_SIZES } from '../../constants'

export default function ProductDetails() {
    const { productId } = useParams();
    const [selectedPhoto, setSelectedPhoto] = useState(0);
    const { fetchedData: sneakers, isFetching, error } = useFetch(fetchSneakers, []);

    const item = sneakers.find(item => item.id == productId);

    const { selectedSize, setSelectedSize, availableSizes } = useProductSizes(item);
    const { averageRatingFullNumber, averageRating, percentageStars, reviewCount } = useProductReviews(item?.reviews || {});

    if (isFetching) return <Loading text="Fetching data..." />;
    if (error) return <p>{error.message}</p>;

    if (!item) {
        return <NotFound
            img={notfound}
            label="Product not found"
            text="The Product that you are looking for doesn&apos;t exist or an other error occured."
            explanation="Go back, or head over to nabistore and choose a new direction" />
    }

    return <>
        <div className={classes.container}>
            <ProductInfo
                item={item}
                averageRating={averageRatingFullNumber}
                reviewCount={reviewCount}
                availableSizes={availableSizes}
                predefinedSizes={item.kids ? KIDS_SIZES : PREDEFINED_SIZES}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize} />
            <ProductPhotos
                item={item}
                selectedPhoto={selectedPhoto}
                setSelectedPhoto={setSelectedPhoto} />
        </div>
        <div className={classes.bottomContainer}>
            <Description
                description={item.details}
                colors={item.colours}
                materials={item.material}
                types={item.type} />
            <SideBar
                averageRating={averageRating}
                averageRatingFullNumber={averageRatingFullNumber}
                percentageStars={percentageStars} />
        </div>
    </>
}