export default function Button({
    children,
    variant = 'primary',
    size = 'medium',
    type = 'button',
    onHandleClick,
    disabled = false,
    className
}) {
    const buttonClass = `
    button 
    button-${variant} 
    button-${size} 
    ${className ? className : ''} 
    ${disabled ? 'button-disabled' : ''}
  `.trim();

    return (
        <button
            className={buttonClass}
            type={type}
            onClick={onHandleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
}
