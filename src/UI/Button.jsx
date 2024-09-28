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
