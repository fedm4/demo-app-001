import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './SaveButton.scss';

const getTimer = (timeCounter) => {
    return 2000 - (
        new Date().getTime() - timeCounter 
    );
};

const SaveButton = ({callback, onClick}) => {
    const [buttonClass, setButtonClass] = useState("");
    const [progressClass, setProgressClass] = useState("");
    const [timeCounter, setTimeCounter] = useState(0);
    const [user, error] = useSelector(state => {
        return [
            state.user,
            state.error
        ];
    });

    const handleClick = event => {
        setTimeCounter(new Date().getTime());
        setProgressClass('full');
        onClick(event);
    };

    useEffect(()=>{
        const time = getTimer(timeCounter);
        setTimeout(() => {
            setButtonClass('saved');
            setTimeout(() => {
                if(callback) {
                    callback();
                }
            }, 1000);
            
            setTimeout(() => {
                setProgressClass('');
                setButtonClass('');
            }, 1500);
        }, time);
    }, [user]);
    useEffect(()=>{
        const time = getTimer(timeCounter);
        setTimeout(() => {
            setProgressClass("full error");
            setButtonClass("error");
        }, time);
    }, [error]);
    return (
        <button onClick={handleClick} className={`save-button ${buttonClass}`}>
            <div className={`save-button-progress ${progressClass}`}></div>
            <span className="save-button-text">Save</span>
            <FontAwesomeIcon icon={faCheck} />
        </button>
    )
};

export default SaveButton;