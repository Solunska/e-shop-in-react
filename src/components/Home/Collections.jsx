import { useNavigate } from "react-router-dom";
import CollectionCard from "../../UI/CollectionCard";
import styles from "./Collections.module.css";
import { useFilter } from "../../hooks/useFilter";

export default function Collections() {
    const { handleFilterKids, handleFilterMens, handleFilterWomen } = useFilter();
    const navigate = useNavigate();

    return <>
        <div className={styles.collections}>
            <h1>Explore our collections</h1>
            <section className={styles.container}>
                <CollectionCard label="shop men's" containerClass={`${styles.card} ${styles.men}`} buttonClass={styles.collectionButton} onHandleClick={() => {
                    handleFilterMens();
                    navigate('/products/mens');
                }} />
                <CollectionCard label="shop women's" containerClass={`${styles.card} ${styles.women}`} buttonClass={styles.collectionButton} onHandleClick={() => {
                    handleFilterWomen();
                    navigate('/products/womens');
                }} />
                <CollectionCard label="shop kids" containerClass={`${styles.card} ${styles.kid}`} buttonClass={styles.collectionButton}onHandleClick={() => {
                    handleFilterKids();
                    navigate('/products/kids');
                }}  />
            </section>
        </div>
    </>
}