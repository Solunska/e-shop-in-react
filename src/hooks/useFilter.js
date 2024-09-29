import { useEffect, useState } from "react";

export function useFilter(sneakers) {
    const [filteredSneakers, setFilteredSneakers] = useState([]);

    useEffect(() => {
        setFilteredSneakers(sneakers);
    }, [sneakers]);

    function filterMens() {
        const menSneakers = sneakers.filter(item => item.gender === 'men');
        setFilteredSneakers(menSneakers);
    }

    function filterWomen() {
        const womenSneakers = sneakers.filter(item => item.gender === 'women');
        setFilteredSneakers(womenSneakers);
    }

    return {
        filterMens,
        filterWomen,
        filteredSneakers,
    }
}