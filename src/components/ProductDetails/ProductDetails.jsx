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

const predefinedSizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

export default function ProductDetails() {
    const { productId } = useParams();
    const [selectedPhoto, setSelectedPhoto] = useState(0);
    const { fetchedData: sneakers, isFetching, error } = useFetch(fetchSneakers, []);

    const item = sneakers.find(item => item.id == productId);

    const { selectedSize, setSelectedSize, availableSizes } = useProductSizes(item);
    const { averageRatingFullNumber, averageRating, percentageStars, reviewCount } = useProductReviews(item?.reviews || {});

    if (isFetching) return <div className='loadingContainer'>
        <p className='loading'>Fetching data...</p>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>;
    if (error) return <p>{error.message}</p>;

    if (!item) {
        return <div className='loadingContainer'>
            <img src={notfound} alt="product not found image" />
            <div className='text'>
                <p className='notFound'>Product not found</p>
                <p className='notFound'>The Product that you are looking for doesn&apos;t exist or an other error occured.</p>
                <p className='notFound'>Go back, or head over to nabistore and choose a new direction</p>
            </div>
        </div>;
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