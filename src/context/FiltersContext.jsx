import { createContext, useState } from "react";

export const FiltersContext = createContext();

export function FiltersContextProvider({ children }) {
    const [filters, setFilters] = useState({
        brand: [],
        material: [],
        sneakerTypes: [],
        customerReviews: null,
        newArrivals: [],
        color: [],
        price: null,
        sort: null
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

    console.log(filters)

    const filtersContext = {
        filters: filters,
        handleFilterChange
    }

    return <FiltersContext.Provider value={filtersContext}>{children}</FiltersContext.Provider>

}