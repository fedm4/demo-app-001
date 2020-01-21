import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './AddButton.scss';

const AddButton = props => {
    const handleClick = event => {
        const element = event.currentTarget;
        element.classList.add("clicked");
        setTimeout(() => {
            element.classList.remove("clicked");
        }, 300);

        if(props.onClick) {
            props.onClick(event);
        }
    };
    return (
        <button onClick={handleClick} className="add-button">
            <FontAwesomeIcon icon={faPlus}/>
        </button>
    );
};

export default AddButton;