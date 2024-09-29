import { useMemo } from "react";

export function useProductReviews(reviews) {
    const reviewCount = useMemo(() => {
        return Object.values(reviews).reduce((count, reviews) => count + reviews, 0);
    }, [reviews])

    const percentageStars = useMemo(() => {
        const percentages = {};
        for (let star = 1; star <= 5; star++) {
            const count = reviews[star] || 0;
            percentages[star] = (reviewCount > 0 ? (count / reviewCount) * 100 : 0).toFixed(0);
        }

        return percentages
    }, [reviewCount, reviews])

    const totalScore = useMemo(() => {
        return Object.entries(reviews).reduce((total, [stars, count]) => total + (count * stars), 0);
    }, [reviews])

    const averageRatingFullNumber = (totalScore / reviewCount).toFixed(0);
    const averageRating = (totalScore / reviewCount).toFixed(1);

    return {
        averageRatingFullNumber,
        averageRating,
        percentageStars,
        reviewCount
    }
}