export default function CollectionCard({ label, containerClass, buttonClass, onHandleClick }) {
    return <>
        <div className={containerClass}>
            <button className={buttonClass} onClick={onHandleClick}>{label}</button>
        </div>
    </>
}