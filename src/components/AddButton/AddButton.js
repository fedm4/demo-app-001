import React, { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faUndo } from '@fortawesome/free-solid-svg-icons';
import './AddButton.scss';

const AddButton = props => {
    const [clickedClass,setClickedClass] = useState("");

    const handleClick = event => {
        if(props.onClick) {
            props.onClick(event);
        }   
    };
    useEffect(() => {
        setClickedClass("clicked");
        setTimeout(() => {
            setClickedClass("");
        }, 300);
 
    }, [props.flipped])
    return (
        <button onClick={handleClick} className={`add-button ${clickedClass}`}>
            <FontAwesomeIcon
                className="add-button-icon"
                icon={faPlus}
                style={{opacity: !props.flipped ? 1: 0}}/>
            <FontAwesomeIcon 
                className="add-button-icon"
                icon={faUndo}
                style={{opacity: props.flipped ? 1: 0}}/>
        </button>
    );
};

export default AddButton;