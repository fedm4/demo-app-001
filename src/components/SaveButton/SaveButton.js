import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import './SaveButton.scss';

const handleClick = event => {
    const el = event.currentTarget;
    el.children[0].classList.add('full');
    el.classList.add('saved');
    setTimeout(() => {
        el.children[0].classList.remove('full');
        el.classList.remove('saved');
    }, 5000);
};

const SaveButton = props => {
    return (
        <button onClick={handleClick} className="save-button">
            <div className="save-button-progress"></div>
            <span className="save-button-text">Save</span>
            <FontAwesomeIcon icon={faCheck} />
        </button>
    )
};

export default SaveButton;