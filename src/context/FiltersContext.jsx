import { createContext, useState } from "react";

export const FiltersContext = createContext();

const startingState = {
    brand: null,
    material: [],
    sneakertypes: [],
    customerReviews: null,
    newArrivals: [],
    color: [],
    price: null,
    sort: null,
    category: null,
    gender: null,
}

export function FiltersContextProvider({ children }) {

    const [filters, setFilters] = useState(startingState);

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

    function clearFilters() {
        setFilters(startingState);
    }

    console.log(filters);

    const filtersContext = {
        filters,
        handleFilterChange,
        clearFilters
    }

    return <FiltersContext.Provider value={filtersContext}>{children}</FiltersContext.Provider>

}