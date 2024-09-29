import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersContextProvider({ children }) {
    const [sneakers, setSneakers] = useState([]);
    const [filteredSneakers, setFilteredSneakers] = useState([]);
    const [filters, setFilters] = useState({
        brand: null,
        material: [],
        sneakerTypes: [],
        customerReviews: null,
        newArrivals: [],
        color: [],
        price: null,
        sort: null,
        category: null
    });

    function handleFilterChange(category, value) {
        setFilters(prevFilters => {
            const currentCategoryValues = prevFilters[category];

            if (Array.isArray(currentCategoryValues)) {
                if (currentCategoryValues.includes(value)) {
                    return {
                        ...prevFilters,
                        [category]: currentCategoryValues.filter(item => item !== value)
                    };
                } else {
                    return {
                        ...prevFilters,
                        [category]: [...currentCategoryValues, value]
                    };
                }
            }

            return {
                ...prevFilters,
                [category]: value
            };
        });
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
                filters.material.includes(item.material)
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

    const filtersContext = {
        filters,
        filteredSneakers,
        handleFilterChange,
        setSneakersData,
        applyFilters
    }

    return <FiltersContext.Provider value={filtersContext}>{children}</FiltersContext.Provider>

}