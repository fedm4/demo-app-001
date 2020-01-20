import React from 'react';
import NavItem from '../NavItem/NavItem';
import NavSearch from '../NavSearch/NavSearch';
import './MainNav.scss';

const MainNav = () => {
    return (
        <nav id="main-nav">
            <header id="main-nav-header">
                <h1>Demo-App-001</h1>
            </header>
            <NavSearch></NavSearch>
            <NavItem to="#" label="Dashboard"></NavItem>
            <NavItem to="/" label="users" selected={true}></NavItem>
        </nav>
    );
};

export default MainNav;