import classes from '../components/Filters.module.css'

export default function Checkbox({ label, type, name }) {
    return <div className={classes.checkboxContainer}>
        <p className={classes.labelParagraph}>{label}</p>
        <input type={type} id={label} name={type == "checkbox" ? label : name} className={type == "checkbox" ? classes.inputCheckbox : classes.inputRadio} />
    </div>
}