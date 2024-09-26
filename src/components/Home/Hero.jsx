import styles from './Hero.module.css';
import rectangleBlue from '../../assets/rectangle-blue.png';
import rectangleBeige from '../../assets/rectangle-beige.png';
import shoe from '../../assets/hero-shoe.png';

export default function Hero() {

    return <>
        <section className={styles.container}>
            <div>
                <img className={styles['rectangle-blue']} src={rectangleBlue} alt='blue rectangle' />
                <img className={styles['rectangle-beige']} src={rectangleBeige} alt='beige rectangle' />
                <img className={styles['hero-shoe']} src={shoe} alt='shoe' />
            </div>

            <header className={styles['hero-heading']}>
                <h1>Step Into Style</h1>
                <p>Discover Your Perfect Sneakers</p>
                <p>Unleash the Butterfly Effect with Every Step</p>
            </header>
        </section>
    </>
}