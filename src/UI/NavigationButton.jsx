export default function NavButton({ image, alt, styles,imgStyles,onHandleClick}) {
    return (
        <button className={styles} onClick={onHandleClick}>
            <img src={image} alt={alt} className={imgStyles}/>
        </button>
    )
}