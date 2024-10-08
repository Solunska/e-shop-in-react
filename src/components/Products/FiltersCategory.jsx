import Checkbox from "../../UI/Checkbox";
import classes from './FiltersCategory.module.css'

const FilterCategory = ({ category, options, selectedOption, onChange, type, containerClass }) => {
    return (
        <div className={containerClass}>
            <h3 className={classes.category}>{category}</h3>
            {options.map((option) => (
                <Checkbox
                    key={option.value}
                    label={option.label}
                    checked={
                        type === 'radio'
                            ? selectedOption === option.value
                            : selectedOption.includes(option.value)
                    }
                    type={type}
                    name={category.toLowerCase()}
                    value={option.value}
                    onChange={(e) => onChange(category.toLowerCase(), e.target.value)}
                />
            ))}
        </div>
    );
};

export default FilterCategory;
