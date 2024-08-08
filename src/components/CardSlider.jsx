import { useRef, useEffect } from 'react';
import { NEW_ARRIVALS } from "../data";
import CardImage from "../UI/CardImages";
import classes from './CardSlider.module.css';
import Button from '../UI/Button';

export default function CardSlider() {
    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;
        let isDragging = false;
        let startX, scrollLeft;

        const startDragging = (e) => {
            isDragging = true;
            startX = e.pageX - carousel.offsetLeft;
            scrollLeft = carousel.scrollLeft;
        };

        const stopDragging = () => {
            isDragging = false;
        };

        const dragging = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - carousel.offsetLeft;
            const walk = (x - startX) * 1; //scroll-fast
            carousel.scrollLeft = scrollLeft - walk;
        };

        carousel.addEventListener('mousedown', startDragging);
        carousel.addEventListener('mouseleave', stopDragging);
        carousel.addEventListener('mouseup', stopDragging);
        carousel.addEventListener('mousemove', dragging);

        return () => {
            carousel.removeEventListener('mousedown', startDragging);
            carousel.removeEventListener('mouseleave', stopDragging);
            carousel.removeEventListener('mouseup', stopDragging);
            carousel.removeEventListener('mousemove', dragging);
        };
    }, []);

    return (
        <div className={classes.wrapper}>
            <div>
                <h1 className={classes.heading}>New Arrivals</h1>
                <p className={classes.paragraph}>Stay Ahead in Style with Our Latest Comfy Sneakers</p>
            </div>
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
            <Button classes={classes.button}>Shop New Arrivals</Button>
        </div>
    );
}
