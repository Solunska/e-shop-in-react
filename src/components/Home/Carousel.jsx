import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import classes from './Carousel.module.css';
import CardImage from "../../UI/CardImages";

export default function Carousel({ items }) {
    return (
        <div className={classes.container}>
            <Swiper
                spaceBetween={30}
                slidesPerView={4}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    600: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                    1440: { // Add a breakpoint for larger screens
                        slidesPerView: 4,
                    },
                }}
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <CardImage
                            url={item.photos[0]}
                            alt={item.name}
                            imgStyles={classes.image} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
