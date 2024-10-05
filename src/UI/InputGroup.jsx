export default function InputGroup({ inputGroupClass, type, required = true, label, value, onChange }) {
    return <div className={inputGroupClass}>
        <label htmlFor={type}>{label}</label>
        <input type={type} id={type} required={required} value={value}  // Bind the input value
            onChange={onChange} />
    </div>
}
