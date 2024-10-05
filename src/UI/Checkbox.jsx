import classes from '../components/Products/Filters.module.css'

export default function Checkbox({ label, type, name, onChange, checked, value }) {
    return <div className={classes.checkboxContainer}>
        <p className={classes.labelParagraph}>{label}</p>
        <input
            type={type}
            value={value ? value : label}
            id={label}
            name={type == "checkbox" ? label : name}
            onChange={onChange}
            checked={checked}
            className={type == "checkbox" ? classes.inputCheckbox : classes.inputRadio} />
    </div>
}