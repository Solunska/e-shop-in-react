import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export default function Modal({ open, children, onClose, modalStyles }) {
    const dialog = useRef();

    useEffect(() => {
        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    return createPortal(
        <dialog className={modalStyles} ref={dialog} onClose={onClose}>
            {open ? children : null}
        </dialog>,
        document.getElementById('modal')
    );
}