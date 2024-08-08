import CollectionCard from "../UI/CollectionCard";
import styles from "../components/Collections.module.css";

export default function Collections() {
    return <>
        <div className={styles['collections-container']}>
            <h1>Explore our collections</h1>
            <section className={styles.container}>
                <CollectionCard label="shop men's" classes={styles.men} />
                <CollectionCard label="shop women's" classes={styles.women} />
                <CollectionCard label="shop kids" classes={styles.kid} />
            </section>
        </div>
    </>
}