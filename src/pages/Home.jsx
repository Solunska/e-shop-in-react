import Collections from '../components/Collections'
import Hero from '../components/Hero'
import classes from '../components/Collections.module.css'

export default function HomePage() {
    return <>
        <Hero />
        <div className={classes.collections}>
            <Collections />
        </div>
        {/* <PromoSection /> */}
    </>
}