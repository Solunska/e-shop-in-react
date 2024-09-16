import Collections from '../components/Collections'
import Hero from '../components/Hero'
import classes from '../components/Collections.module.css'
import CardSlider from '../components/CardSlider'
import Filters from '../components/Filters'

export default function HomePage() {
    return <>
        <Hero />
        <Filters />
        <div className={classes.collections}>
            <Collections />
        </div>
        <CardSlider />
        {/* <PromoSection /> */}
    </>
}