import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './MainHeader.scss';

const MainHeader = () => {
    return (
        <header id="main-header">
            <FontAwesomeIcon icon={faBars} />
            Breadcrumb > Breadcrumb
        </header>
    );
}

export default MainHeader;