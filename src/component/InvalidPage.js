import React from "react";
import { NavLink } from "react-router-dom";

/**
 * 404 page for when user types in a route that does not match any routing
 * */

const InvalidPage = () => {
    return(
        <ul>
            <li className="not-found">
                <h3>This page does not exist</h3>
                <p>The page you are trying to access is invalid. Please go back to the homepage.</p>
                <NavLink to='/'>Go to Homepage</NavLink>
            </li>
        </ul>
    );
}

export default InvalidPage;