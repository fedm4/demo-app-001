import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './MessageBar.scss';

const MessageBar = ({onClick, className, display, message}) => {
    const handleClickClose = event => {
        onClick();
    };
    return (
        <aside className={`message-bar ${display?"":"hide"} ${className}`}>
            {message}
            <FontAwesomeIcon icon={faTimes} onClick={handleClickClose} />
        </aside>
    );
};

export default MessageBar;