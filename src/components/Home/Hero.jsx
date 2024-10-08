import styles from './Hero.module.css';
import rectangleBlue from '../../assets/rectangle-blue.png';
import rectangleBeige from '../../assets/rectangle-beige.png';
import shoe from '../../assets/hero-shoe.png';
import { motion } from "framer-motion";

export default function Hero() {
    return <>
        <section className={styles.container}>
            <div>
                <img
                    className={styles['rectangle-blue']}
                    src={rectangleBlue}
                    alt='blue rectangle' />
                <img
                    className={styles['rectangle-beige']}
                    src={rectangleBeige}
                    alt='beige rectangle' />
                <img
                    className={styles['hero-shoe']}
                    src={shoe}
                    alt='shoe' />
            </div>
            <header className={styles['hero-heading']}>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ type: 'spring', stiffness: 50 }}>Step Into Style</motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10, }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ type: 'spring', stiffness: 50 }}>Discover Your Perfect Sneakers</motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ type: 'spring', stiffness: 50 }}>Unleash the Butterfly Effect with Every Step</motion.p>
            </header>
        </section>
    </>
}