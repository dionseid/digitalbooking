import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import '../styles/sidebar.css';
import '../styles/navbar.css';

const Sidebar = props => {
    return <Menu right >
        <a className="menu-item" href="/">
            Home
        </a>
        <a className="menu-item" href="/salads">
            Salads
        </a>
        <a className="menu-item" href="/pizzas">
            Pizzas
        </a>
        <a className="menu-item" href="/desserts">
            Desserts
        </a>
    </Menu>;
}

export default Sidebar;