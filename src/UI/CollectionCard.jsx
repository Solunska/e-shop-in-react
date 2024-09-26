import Button from "./Button";

export default function CollectionCard({ label, containerClass, buttonClass }) {
    return <>
        <div className={containerClass}>
            <Button classes={buttonClass}>{label}</Button>
        </div>
    </>
}