import classes from './Filters.module.css';
import Button from '../../UI/Button';
import { useContext } from 'react';
import { FiltersContext } from '../../context/FiltersContext';
import FilterCategory from './FiltersCategory';
import { FILTER_OPTIONS_1, FILTER_OPTIONS_2, FILTER_OPTIONS_3 } from '../../data';

export default function Filters({ applyFilters, toggleFilters }) {
    const { filters, handleFilterChange, clearFilters } = useContext(FiltersContext);

    return <>
        <div className={classes.mainContainer}>
            <div className={classes.container}>
                {Object.entries(FILTER_OPTIONS_1).map(([category, options]) => (
                    <FilterCategory
                        key={category}
                        category={category.charAt(0).toUpperCase() + category.slice(1)}
                        options={options}
                        selectedOption={filters[category]}
                        onChange={handleFilterChange}
                        type={category === 'brand' ? 'radio' : 'checkbox'}
                    />
                ))}
            </div>
            <div className={classes.container}>
                {Object.entries(FILTER_OPTIONS_2).map(([category, options]) => (
                    <FilterCategory
                        key={category}
                        category={category.charAt(0).toUpperCase() + category.slice(1)}
                        options={options}
                        selectedOption={filters[category]}
                        onChange={handleFilterChange}
                        type={category === 'gender' ? 'radio' : 'checkbox'}
                    />
                ))}
            </div>
            <div className={classes.container}>
                <div>
                    {Object.entries(FILTER_OPTIONS_3).map(([category, options]) => (
                        <FilterCategory
                            key={category}
                            containerClass={classes.price}
                            category={category.charAt(0).toUpperCase() + category.slice(1)}
                            options={options}
                            selectedOption={filters[category]}
                            onChange={handleFilterChange}
                            type={category === 'price' || category === 'sort' ? 'radio' : 'checkbox'}
                        />
                    ))}
                </div>
                <div className={classes.btnContainer}>
                    <Button variant='primary' onHandleClick={() => {
                        applyFilters()
                        toggleFilters()
                    }}>Search</Button>
                    <Button variant='secondary' onHandleClick={() => {
                        clearFilters()
                    }}>Clear Filters</Button>
                </div>
            </div>
        </div>
    </>
}