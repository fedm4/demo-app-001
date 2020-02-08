import React from 'react';
import PropTypes from 'prop-types';
import './Table.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Table = props =>{
    const editClick = (event,user) => {
        setClickedAnimation(event);
        props.edit(user);
    };
    const setClickedAnimation = event =>{
        event.preventDefault();
        const element = event.currentTarget.children[0];
        element.classList.add("clicked");
        setTimeout(()=>{element.classList.remove("clicked")}, 300);
    }
    return (
        <table className="table">
            <thead>
                <tr>
                    {props.columns.map(title => {
                            return <th key={title}>{title}</th>
                    })}
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item, index) => {
                    return (
                        <tr key={`table-${index}`}>
                            {props.columns.map(key =>{
                                    return (<td key={`table-${index}-${key}`}>{item[key]}</td>);
                            })}
                            <td>
                                <button onClick={event => {editClick(event, item)}}>
                                    <FontAwesomeIcon className="edit-icon" icon={faEdit}></FontAwesomeIcon>
                                </button>
                            </td>
                            <td>
                                <button onClick={setClickedAnimation}>
                                    <FontAwesomeIcon className="delete-icon" icon={faTimes}></FontAwesomeIcon>
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

Table.propTypes = {
    edit: PropTypes.func.isRequired
};


export default Table;