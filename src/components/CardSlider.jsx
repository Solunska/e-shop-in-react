import { useRef } from 'react';
import { NEW_ARRIVALS } from "../data";
import CardImage from "../UI/CardImages";
import classes from './CardSlider.module.css';
import Button from '../UI/Button';

export default function CardSlider() {
    const carouselRef = useRef(null);

    const getScrollDistance = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1024) {
            return 800; 
        } else if (screenWidth < 580) {
            return 330; 
        }
    };

    const scrollLeft = () => {
        const scrollDistance = getScrollDistance();
        carouselRef.current.scrollBy({
            left: -scrollDistance,
            behavior: 'smooth',
        });
    };

    const scrollRight = () => {
        const scrollDistance = getScrollDistance();
        carouselRef.current.scrollBy({
            left: scrollDistance,
            behavior: 'smooth',
        });
    };

    return (
        <div className={classes.wrapper}>
            <div>
                <h1 className={classes.heading}>New Arrivals</h1>
                <p className={classes.paragraph}>Stay Ahead in Style with Our Latest Comfy Sneakers</p>
            </div>
            <div className={classes.carouselContainer}>
                <button className={classes.scrollButton} onClick={scrollLeft}><span className={classes.spanClass}>←</span></button>
                <ul ref={carouselRef} className={classes.carousel}>
                    {NEW_ARRIVALS.map((item) => (
                        <CardImage
                            key={item.id}
                            url={item.image.src}
                            alt={item.image.alt}
                            cardStyles={classes.card}
                            imgContainerStyles={classes.imgContainer}
                            imgStyles={classes.image}
                        />
                    ))}
                </ul>
                <button className={classes.scrollButton} onClick={scrollRight}>→</button>
            </div>
            <Button classes={classes.button}>Shop New Arrivals</Button>
        </div>
    );
}
