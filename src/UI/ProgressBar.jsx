import classes from '../components/ProductDetails/ProductDetails.module.css';

export default function ProgressBar({number, percentege}) {
    return <div className={classes.progressContainer}>
        <p>{number}</p>
        <div className={`${"progress"} ${classes.progressBar}`}>
            <div className={`${"progress-bar"} ${classes.progress}`} style={{width: `${percentege}%`}} role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <p>{number}</p>
    </div>
}