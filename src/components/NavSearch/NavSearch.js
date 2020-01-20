import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './NavSearch.scss';

const NavSearch = () => {
    return (
        <div className="nav-search-container">
            <FontAwesomeIcon className="search-icon" icon={faSearch}></FontAwesomeIcon>
            <input className="nav-search" type="text" placeholder="Search"></input>
        </div>
    );
};

export default NavSearch;