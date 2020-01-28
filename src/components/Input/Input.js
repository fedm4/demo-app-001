import React, { useState } from 'react';

import './Input.scss';


const Input = props => {
    const [top, setTop] = useState(false);
    const handleOnChange = event => {
        const el = event.currentTarget;
        setTop(el.value.length > 0 ? true : false);
    };
    const handleOnFocus = () => {
        setTop(true);
    };
    const handleOnBlur = event => {
        handleOnChange(event);
    }
    return (
        <div className="input-container">
            <label className={`input-label ${top ? "top" : ""}`}>{props.placeholder}</label>
            <input className="input" 
                type={`${props.type ? props.type : 'text'}`}
                onChange={handleOnChange}
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
            />
            <span className="border-focus"></span>
        </div>
    );
};

export default Input;