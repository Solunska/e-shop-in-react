import { forwardRef } from "react"

const Input = forwardRef(({ label, type, name }, ref) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} name={name} ref={ref} /> 
        </div>
    );
});

Input.displayName = "Input";

export default Input;