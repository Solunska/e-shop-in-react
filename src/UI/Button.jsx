import { motion } from "framer-motion";

export default function Button({
    children,
    variant = 'primary',
    size = 'medium',
    type = 'button',
    onHandleClick,
    disabled = false,
    className,
    border
}) {
    const buttonClass = `
    button 
    button-${variant} 
    button-${size} 
    border-${border}
    ${className ? className : ''} 
    ${disabled ? 'button-disabled' : ''}
  `.trim();

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 150, }}
            className={buttonClass}
            type={type}
            onClick={onHandleClick}
            disabled={disabled}
        >
            {children}
        </motion.button>
    );
}
