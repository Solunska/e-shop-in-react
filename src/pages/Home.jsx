import Collections from '../components/Collections'
import Hero from '../components/Hero'
import CardSlider from '../components/CardSlider'
import Filters from '../components/Filters'

export default function HomePage() {
    return <>
        <Hero />
        <Filters />
        <Collections />
        <CardSlider />
        {/* <PromoSection /> */}
    </>
}