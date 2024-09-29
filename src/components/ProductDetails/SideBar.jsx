import LogoLabel from '../../UI/LogoLabel'
import RatingBar from './RatingBar'
import classes from './SideBar.module.css'
import Stars from './Stars'
import comfortImg from '../../assets/comfort.png';
import recycleImg from '../../assets/recycle.png';
import returnImg from '../../assets/return.png';

export default function SideBar({averageRatingFullNumber, averageRating, percentageStars}) {
    return <div className={classes.sideBar}>
        <div className={classes.rating}>
            <Stars
                averageRating={averageRatingFullNumber}
                containerClass={classes.starsRatingContainer}
                label={averageRating}
                size="35px"
            />
            <RatingBar percentageStars={percentageStars} />
        </div>
        <div className={classes.benefits}>
            <LogoLabel logo={comfortImg} label="All-Day Comfort" containerClass={classes.logoLabelContainer} />
            <LogoLabel logo={recycleImg} label="Eco-Friendly" containerClass={classes.logoLabelContainer} />
            <LogoLabel logo={returnImg} label="Hassle-Free Returns" containerClass={classes.logoLabelContainer} />
        </div>
    </div>
}