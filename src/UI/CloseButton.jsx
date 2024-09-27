export default function CloseButton({onHandleClick}) {
    return <button className='closeButton' onClick={onHandleClick}>
        &times;
    </button>
}