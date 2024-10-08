import { useState } from "react";

export function useFormFields(initialState) {
    const [formFields, setFormFields] = useState(initialState);

    function handleFieldChange(e) {
        const { name, value } = e.target;
        setFormFields({
            ...formFields,
            [name]: value,
        });
    }

    return [formFields, handleFieldChange, setFormFields];
}