import React from "react";
import { NavLink } from 'react-router-dom';

const Default = () => {
    // Set up three default navigation links: Rainbows, Sunsets and Waterfalls
    return (
        <nav className="main-nav">
            <ul>
                <li>
                    <NavLink to='/rainbows'>Rainbows</NavLink>
                </li>
                <li>
                    <NavLink to='/sunsets'>Sunsets</NavLink>
                </li>
                <li>
                    <NavLink to='/waterfalls'>Waterfalls</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Default;