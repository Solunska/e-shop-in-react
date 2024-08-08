import Button from "./Button";
import styles from "../components/Collections.module.css";

export default function CollectionCard({ label, classes }) {
    return <>
        <div className={`${styles.card} ${classes}`}>
            <Button classes={styles['collection-button']}>{label}</Button>
        </div>
    </>
}