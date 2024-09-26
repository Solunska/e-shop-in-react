import StarIcon from '../../UI/Star'
import classes from './Stars.module.css'

export default function Stars({ averageRating, label, labelClass, size, containerClass }) {
    return <div className={containerClass}>
        <div>
            <StarIcon starClass={classes.starYellow} size={size} />
            <StarIcon starClass={averageRating >= 2 ? classes.starYellow : classes.starGray} size={size} />
            <StarIcon starClass={averageRating >= 3 ? classes.starYellow : classes.starGray} size={size} />
            <StarIcon starClass={averageRating >= 4 ? classes.starYellow : classes.starGray} size={size} />
            <StarIcon starClass={averageRating == 5 ? classes.starYellow : classes.starGray} size={size} />
        </div>
        <p className={labelClass}>{label}</p>
    </div>
}