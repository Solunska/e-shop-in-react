import { useState } from "react";

export function useQuantity() {
    const [quantity, setQuantity] = useState(1);

    function decreaseQuantity() {
        if (quantity == 1) {
            return null
        } else {
            setQuantity(quantity - 1)
        }
    }

    function increaseQuantity() {
        setQuantity(quantity + 1)
    }

    return {
        increaseQuantity,
        decreaseQuantity,
        quantity
    }
}