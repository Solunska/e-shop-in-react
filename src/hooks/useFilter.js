import { useCallback, useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/FiltersContext";

export function useFilter() {
    const [filteredSneakers, setFilteredSneakers] = useState([]);
    const [sneakers, setSneakers] = useState([]);
    const { filters, handleFilterChange } = useContext(FiltersContext);

    useEffect(() => {
        setFilteredSneakers(sneakers);
    }, [filters, sneakers]);

    useEffect(() => {
        applyFilters();
    }, [filters.gender]);


    function handleFilterMens() {
        handleFilterChange('gender', 'men');
    }

    function handleFilterWomen() {
        handleFilterChange('gender', 'women');
    }

    function handleFilterKids() {
        handleFilterChange('gender', 'kids');
    }


    const applyFilters = useCallback(() => {
        let updatedSneakers = [...sneakers];

        if (filters.brand) {
            updatedSneakers = updatedSneakers.filter(item =>
                filters.brand.includes(item.brand)
            );
        }

        if (filters.material.length > 0) {
            updatedSneakers = updatedSneakers.filter(item =>
                filters.material.some(material => item.material.includes(material))
            );
        }

        if (filters.sneakerTypes.length > 0) {
            updatedSneakers = updatedSneakers.filter(item =>
                filters.sneakerTypes.some(ftype => item.type.includes(ftype))
            );
        }

        if (filters.color.length > 0) {
            updatedSneakers = updatedSneakers.filter(item =>
                filters.color.some(color => item.colours.includes(color))
            );
        }

        if (filters.price) {
            updatedSneakers = updatedSneakers.filter(item => {
                switch (filters.price) {
                    case "Under $50":
                        return item.price < 50;
                    case "$50 - $100":
                        return item.price >= 50 && item.price <= 100;
                    case "$100 - $150":
                        return item.price >= 100 && item.price <= 150;
                    case "$150 - $200":
                        return item.price >= 150 && item.price <= 200;
                    case "$Above $200":
                        return item.price > 200;
                    default:
                        return true;
                }
            });
        }

        if (filters.gender) {
            updatedSneakers = updatedSneakers.filter(item =>
                filters.gender === item.gender
            );
        }

        setFilteredSneakers(updatedSneakers);
    }, [filters, sneakers]);

    function setSneakersData(data) {
        setSneakers(data);
    }

    return {
        setSneakersData,
        applyFilters,
        filteredSneakers,
        handleFilterMens,
        handleFilterKids,
        handleFilterWomen
    }
}