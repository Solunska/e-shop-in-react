import { useCallback, useContext, useEffect, useState } from "react";
import { FiltersContext } from "../context/FiltersContext";
import { SearchContext } from "../context/SearchContext";

export function useFilter() {
    const [filteredSneakers, setFilteredSneakers] = useState([]);
    const [sneakers, setSneakers] = useState([]);
    const { filters, handleFilterChange } = useContext(FiltersContext);
    const { search } = useContext(SearchContext);

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
            if (filters.gender === 'kids') {
                updatedSneakers = updatedSneakers.filter(item => item.kids === true);
            } else {
                updatedSneakers = updatedSneakers.filter(item => filters.gender === item.gender && item.kids === false);
            }
        }

        if (filters.sort) {
            if (filters.sort === 'pricesA') {
                updatedSneakers.sort((a, b) => a.price - b.price);
            } else if (filters.sort === 'pricesD') {
                updatedSneakers.sort((a, b) => b.price - a.price);
            } else if (filters.sort === 'popularityA') {
                const sum = (obj) => Object.values(obj).reduce((acc, num) => acc + num, 0);
                updatedSneakers.sort((a, b) => sum(a.reviews) - sum(b.reviews));
            } else if (filters.sort === 'popularityD') {
                const sum = (obj) => Object.values(obj).reduce((acc, num) => acc + num, 0);
                updatedSneakers.sort((a, b) => sum(b.reviews) - sum(a.reviews));
            }
        }

        if (search) {
            updatedSneakers = updatedSneakers.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
        }

        setFilteredSneakers(updatedSneakers);
    }, [filters, sneakers, search]);

    useEffect(() => {
        switch (location.pathname) {
            case '/mens':
                handleFilterMens();
                break;
            case '/womens':
                handleFilterWomen();
                break;
            case '/kids':
                handleFilterKids();
                break;
            default:
                break;
        }
        applyFilters();
    }, [location.pathname, applyFilters]);

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