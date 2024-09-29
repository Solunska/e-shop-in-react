export default function InputGroup({ inputGroupClass, type, required = true, label }) {
    return <div className={inputGroupClass}>
        <label htmlFor={type}>{label}</label>
        <input type={type} id={type} required={required} />
    </div>
}
