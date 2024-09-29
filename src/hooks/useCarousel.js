import { useRef } from "react";

export function useCarousel() {
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

    return {
        carouselRef,
        scrollLeft,
        scrollRight
    };
}