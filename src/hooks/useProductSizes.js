import { useEffect, useMemo, useState } from "react";

export function useProductSizes(item){
    const [selectedSize, setSelectedSize] = useState(35);
 
    const availableSizes = useMemo(() => Array.isArray(item?.sizes) ? item.sizes : [], [item]);

    useEffect(() => {
        if (availableSizes.length > 0) {
            setSelectedSize(availableSizes[0]);
        }
    }, [availableSizes]);

    return{
        selectedSize,
        setSelectedSize,
        availableSizes
    }
}