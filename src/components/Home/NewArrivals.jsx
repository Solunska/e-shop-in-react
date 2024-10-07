import classes from './NewArrivals.module.css';
import Button from '../../UI/Button';
import { useFetch } from '../../hooks/useFetch';
import { fetchSneakers } from '../../http';
import Carousel from './Carousel';

export default function NewArrivals() {
    const { fetchedData: sneakers, isFetching, error } = useFetch(fetchSneakers, []);

    if (isFetching) return <p>Loading sneakers...</p>;
    if (error) return <p>{error.message}</p>;

    return (
        <div className={classes.container}>
            <div>
                <h1 className={classes.heading}>New Arrivals</h1>
                <p className={classes.paragraph}>Stay Ahead in Style with Our Latest Comfy Sneakers</p>
            </div>
            <Carousel items={sneakers} />
            <div className={classes.btnContainer}>
                <Button
                    variant="primary"
                    size="large"
                    onHandleClick={() => { }}>Shop New Arrivals</Button>
            </div>
        </div>
    );
}
