import Details from '../../UI/Details'
import classes from './Description.module.css'

export default function Description({ description, colors, materials, types }) {
    return <div className={classes.description}>
        <div>
            <p className={classes.labelClass}>Product description</p>
            <p>{description}</p>
        </div>
        <Details
            item={colors}
            label="Colors"
            detailsContainer={classes.detailsContainer}
            itemsContainer={classes.itemsContainer}
            labelClass={classes.labelClass} />
        <Details
            item={materials}
            label="Material used"
            detailsContainer={classes.detailsContainer}
            itemsContainer={classes.itemsContainer}
            labelClass={classes.labelClass} />
        <Details
            item={types}
            label="Sneaker type"
            detailsContainer={classes.detailsContainer}
            itemsContainer={classes.itemsContainer}
            labelClass={classes.labelClass} />
    </div>
}