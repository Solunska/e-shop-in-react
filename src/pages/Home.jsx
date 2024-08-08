import Collections from '../components/Collections'
import Hero from '../components/Hero'
import classes from '../components/Collections.module.css'
import CardSlider from '../components/CardSlider'

export default function HomePage() {
    return <>
        <Hero />
        <div className={classes.collections}>
            <Collections />
        </div>
        <CardSlider />
        {/* <PromoSection /> */}
    </>
}