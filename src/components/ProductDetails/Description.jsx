import classes from './Description.module.css'

export default function Description({ description }) {
    return <div className={classes.description}>
        <p>Product description</p>
        <p>{description}</p>
    </div>
}