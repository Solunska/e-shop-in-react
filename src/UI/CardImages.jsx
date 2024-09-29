export default function CardImage({ imgStyles, url, alt }) {
    return <>
        <li >
            <div> <img className={imgStyles} src={url} alt={alt} /> </div>
        </li>
    </>
}