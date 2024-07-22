export default function NavButton({ image, alt, styles,imgStyles}) {
    return (
        <button className={styles}>
            <img src={image} alt={alt} className={imgStyles}/>
        </button>
    )
}