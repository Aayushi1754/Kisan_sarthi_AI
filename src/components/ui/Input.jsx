import React from 'react'
    const Input=({
        label,
        placeholder,
        type="text",
        value,
        onChange,
        error
    }) =>{
        return (
    <div className="flex flex-col gap-2">
        <label> {label}</label>
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="border p-2 rounded" />
        {error &&
        <p className="text-red-500">
            {error}
            </p>
            }
    </div>
    )

    }
export default Input
