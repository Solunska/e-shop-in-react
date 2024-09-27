export default function CollectionCard({ label, containerClass, buttonClass }) {
    return <>
        <div className={containerClass}>
            <button className={buttonClass}>{label}</button>
        </div>
    </>
}