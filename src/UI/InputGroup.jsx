export default function InputGroup({ inputGroupClass, type, required = true, label, value, onChange, name }) {
    return <div className={inputGroupClass}>
        <label htmlFor={type}>{label}</label>
        <input type={type} id={type} required={required} value={value} name={name}
            onChange={onChange} />
    </div>
}
