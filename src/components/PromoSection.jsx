import classes from './PromoSection.module.css'

export default function PromoSection() {
    return <>

        <section className={classes.container}>
            <div className={`${classes['girl-photo']} ${classes['photo']}`}></div>
            <div className={`${classes['shoe-photo']} ${classes['photo']}`}></div>
        </section>
        <div className={classes.heading1}>
            <h1>style</h1>
            <hr></hr>
        </div>
    </>
}