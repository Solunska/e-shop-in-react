export default function Button({ children, classes, onHandleClick }) {
    return <button onClick={onHandleClick} className={classes}>{children}</button>
}