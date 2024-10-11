import classes from './NewArrivals.module.css';
import Button from '../../UI/Button';
import { useFetch } from '../../hooks/useFetch';
import { fetchSneakers } from '../../http';
import Carousel from './Carousel';
import Loading from '../../UI/Loading';

export default function NewArrivals() {
    const { fetchedData: sneakers, isFetching, error } = useFetch(fetchSneakers, []);
    return (
        <div className={classes.container}>
            <div>
                <p className={classes.paragraph}>Stay Ahead in Style with Our Latest Comfy Sneakers</p>
            </div>
            {isFetching && <Loading text="Loading sneakers..." />}
            {error && <p>{error.message}</p>}
            <Carousel items={sneakers} />

        </div>
    );
}
