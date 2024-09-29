import classes from './NewArrivals.module.css';
import Button from '../../UI/Button';
import { useFetch } from '../../hooks/useFetch';
import { useCarousel } from '../../hooks/useCarousel';
import { fetchSneakers } from '../../http';
import Carousel from './Carousel';

export default function NewArrivals() {
    const { fetchedData: sneakers, isFetching, error } = useFetch(fetchSneakers, []);
    const { carouselRef, scrollLeft, scrollRight } = useCarousel()

    if (isFetching) return <p>Loading sneakers...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div className={classes.container}>
            <div>
                <h1 className={classes.heading}>New Arrivals</h1>
                <p className={classes.paragraph}>Stay Ahead in Style with Our Latest Comfy Sneakers</p>
            </div>
            <Carousel
                items={sneakers}
                scrollLeft={scrollLeft}
                scrollRight={scrollRight}
                carouselRef={carouselRef}
            />
            <div className={classes.btnContainer}>
                <Button
                    variant="primary"
                    size="large"
                    onHandleClick={() => { }}>Shop New Arrivals</Button>
            </div>
        </div>
    );
}
