import classes from './Filters.module.css';

export default function Checkbox({label}) {
    return <div className={classes.checkboxContainer}>
        <p className={classes.labelParagraph}>{label}</p>
        <input type="checkbox" id={label} name={label} className={classes.inputCheckbox} />
    </div>
}