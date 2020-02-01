import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
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
    const firstRun = useRef(true);
    const firstRunError = useRef(true);
    const [user, error] = useSelector(state => {
        return [
            state.user.user,
            state.user.error
        ];
    });
    const handleClick = event => {
        setTimeCounter(new Date().getTime());
        setProgressClass('full');
        onClick();
    };

    useEffect(()=>{
        // First run do not do anything
        if(firstRun.current) {
            firstRun.current = false;
            return;
        }
        // Start timer for animations
        const time = getTimer(timeCounter);
        // main timeout for animations
        setTimeout(() => {
            setButtonClass('saved');
            // Call callback after one second of main timeout
            setTimeout(() => {
                if(callback) {
                    callback();
                }
            }, 1000);
            // Remove classes for button to restart
            setTimeout(() => {
                setProgressClass('');
                setButtonClass('');
            }, 1500);
        }, time);
    }, [user]);
    
    useEffect(()=>{
        //First run do not do anything
        if(firstRunError.current) {
            firstRunError.current = false;
            return;
        }
        // Set timer for anitmation
        const time = getTimer(timeCounter);
        // Main timeout to set error classes
        setTimeout(() => {
            setProgressClass("full error");
            setButtonClass("saved error");
        }, time);
    }, [error]);
    return (
        <button onClick={handleClick} className={`save-button ${buttonClass}`}>
            <div className={`save-button-progress ${progressClass}`}></div>
            <span className="save-button-text">Save</span>
            <FontAwesomeIcon icon={faCheck} />
            <FontAwesomeIcon icon={faTimes} />
        </button>
    )
};

export default SaveButton;