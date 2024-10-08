import { useNavigate } from "react-router-dom";
import CollectionCard from "../../UI/CollectionCard";
import styles from "./Collections.module.css";
import { useFilter } from "../../hooks/useFilter";
import { motion } from "framer-motion";

export default function Collections() {
    const { handleFilterKids, handleFilterMens, handleFilterWomen } = useFilter();
    const navigate = useNavigate();

    return <>
        <div className={styles.collections}>
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 100 }}
                transition={{ type: 'spring', stiffness: 50 }}>Explore our collections</motion.h1>
            <section className={styles.container}>
                <CollectionCard
                    label="shop men's"
                    containerClass={`${styles.card} ${styles.men}`}
                    buttonClass={styles.collectionButton}
                    onHandleClick={() => {
                        handleFilterMens();
                        navigate('/products/mens');
                    }} />
                <CollectionCard
                    label="shop women's"
                    containerClass={`${styles.card} ${styles.women}`}
                    buttonClass={styles.collectionButton}
                    onHandleClick={() => {
                        handleFilterWomen();
                        navigate('/products/womens');
                    }} />
                <CollectionCard
                    label="shop kids"
                    containerClass={`${styles.card} ${styles.kid}`}
                    buttonClass={styles.collectionButton}
                    onHandleClick={() => {
                        handleFilterKids();
                        navigate('/products/kids');
                    }} />
            </section>
        </div>
    </>
}