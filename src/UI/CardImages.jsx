export default function CardImage({ imgStyles, url, alt }) {
    return <>
        <li >
            <img className={imgStyles} src={url} alt={alt} />
        </li>
    </>
}