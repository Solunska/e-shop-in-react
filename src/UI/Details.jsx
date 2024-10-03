export default function Details({ label, item, detailsContainer, itemsContainer, labelClass }) {
    return <div className={detailsContainer}>
        <p className={labelClass}>{label}:</p>
        <div className={itemsContainer}>
            {item.map(x => <p key={x}>{x}</p>)}
        </div>
    </div>
}