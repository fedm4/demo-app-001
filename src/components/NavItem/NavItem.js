import React from 'react';
import { Link } from 'react-router-dom';
import './NavItem.scss';

const NavItem = props => {
    const selected = () => {
        return props.selected ? "selected" : "";
    };
    return (
        <div className={`nav-item ${selected()}`}>
            <Link to={props.to}>{props.label}</Link>
        </div>
    );
};

export default NavItem;