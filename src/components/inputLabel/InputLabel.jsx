// import React from 'react';
import './InputLabel.css';

const InputLabel = ({labelName, inputText, type, id, name, className, value, onChange, placeholder, required, children}) => {
    return (
        <label htmlFor={labelName}>
            {inputText}
            <input
                type={type}
                id={id}
                name={name}
                className={className}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
            />
            {children}
        </label>
    );
};

export default InputLabel;