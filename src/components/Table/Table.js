import React from 'react';
import './Table.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

const Table = props =>{
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
                                    return (<td key={`table-${index}-   ${key}`}>{item[key]}</td>);
                            })}
                            <td>
                                <FontAwesomeIcon className="edit-icon" icon={faEdit}></FontAwesomeIcon>
                            </td>
                            <td>
                                <FontAwesomeIcon className="delete-icon" icon={faTimes}></FontAwesomeIcon>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    );
};

export default Table;