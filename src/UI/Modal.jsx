import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ open, children, onClose, modalStyles }) {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        }
    }, [open]);


    return createPortal(
        <motion.dialog
            initial={{ scale: 0.8, y: 0 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.8, y: 0 }}
            className={modalStyles}
            ref={dialog}
            onClose={onClose}>
            {open ? children : null}
        </motion.dialog>,
        document.getElementById('modal')
    );
}