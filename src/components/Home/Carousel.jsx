import classes from './Carousel.module.css'
import CardImage from "../../UI/CardImages";

export default function Carousel({ items, scrollLeft, scrollRight, carouselRef }) {
    return <div className={classes.container}>
        <button className={classes.button} onClick={scrollLeft}>←</button>
        <ul ref={carouselRef} className={classes.carousel}>
            {items.map((item) => (
                <CardImage
                    key={item.id}
                    url={item.photos[0]}
                    alt={item.name}
                    imgStyles={classes.image} />
            ))}
        </ul>
        <button className={classes.button} onClick={scrollRight}>→</button>
    </div>
}