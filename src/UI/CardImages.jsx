export default function CardImage({ cardStyles, imgContainerStyles,imgStyles, url, alt }) {
    return <>
        <li className={cardStyles}>
            <div className={imgContainerStyles}> <img className={imgStyles} src={url} alt={alt} /> </div>
        </li>
    </>
}