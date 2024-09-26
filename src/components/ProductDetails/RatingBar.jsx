import ProgressBar from '../../UI/ProgressBar'
import classes from './RatingBar.module.css'

export default function RatingBar({percentageStars}) {
    return <div className={classes.progressBarsContainer}>
        <ProgressBar number={5} percentege={percentageStars[5]} />
        <ProgressBar number={4} percentege={percentageStars[4]} />
        <ProgressBar number={3} percentege={percentageStars[3]} />
        <ProgressBar number={2} percentege={percentageStars[2]} />
        <ProgressBar number={1} percentege={percentageStars[1]} />
    </div>
}