import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <NavLink exact to="/" activeClassName="active">
                    Home
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
            </nav>
        );
    }
}

export default Nav;