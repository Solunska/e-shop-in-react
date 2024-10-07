import { motion } from "framer-motion";

export default function CollectionCard({ label, containerClass, buttonClass, onHandleClick }) {

    return <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ type: 'spring', stiffness: 50 }}
        className={containerClass}>
        <button className={buttonClass} onClick={onHandleClick}>{label}</button>
    </motion.div>

}