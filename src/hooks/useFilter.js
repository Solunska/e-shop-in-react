import { useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/FiltersContext";

export function useFilter() {
    const [filteredSneakers, setFilteredSneakers] = useState([]);
    const [sneakers, setSneakers] = useState([]);
    const { filters } = useContext(FiltersContext);

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

    function applyFilters() {
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
                filters.sneakerTypes.includes(item.type)
            );
        }

        if (filters.color.length > 0) {
            updatedSneakers = updatedSneakers.filter(item =>
                filters.color.includes(item.color)
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

        setFilteredSneakers(updatedSneakers);
    }

    function setSneakersData(data) {
        setSneakers(data);
    }

    return {
        filterMens,
        filterWomen,
        setSneakersData,
        applyFilters,
        filteredSneakers,
    }
}