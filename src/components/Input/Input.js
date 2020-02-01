import React, { useState, useEffect } from 'react';

import './Input.scss';


const Input = props => {
    const [top, setTop] = useState(false);

    useEffect(() => {
        setTop(props.value.length > 0 ? true : false);
    }, [props.value]);

    const handleOnChange = event => {
        const el = event.currentTarget;
        props.onChange(event);
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
                value={props.value}
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