import CollectionCard from "../../UI/CollectionCard";
import styles from "./Collections.module.css";

export default function Collections() {
    return <>
        <div className={styles.collections}>
            <h1>Explore our collections</h1>
            <section className={styles.container}>
                <CollectionCard label="shop men's" containerClass={`${styles.card} ${styles.men}`} buttonClass={styles.collectionButton} />
                <CollectionCard label="shop women's" containerClass={`${styles.card} ${styles.women}`} buttonClass={styles.collectionButton} />
                <CollectionCard label="shop kids" containerClass={`${styles.card} ${styles.kid}`} buttonClass={styles.collectionButton} />
            </section>
        </div>
    </>
}