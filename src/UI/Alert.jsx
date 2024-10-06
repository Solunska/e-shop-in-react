import ReactDOM from 'react-dom';

const Alert = ({ message, onClose, className }) => {
    return ReactDOM.createPortal(
        <div className={`alert ${className}`}>
            <span className='message'>{message}</span>
            <button className='closeButtonAlert' onClick={onClose}>
                &times;
            </button>
        </div>, document.getElementById('alert-root') // Specify the DOM element where you want to render the alert
    );
};

export default Alert;