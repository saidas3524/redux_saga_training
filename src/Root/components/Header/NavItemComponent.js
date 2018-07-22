import React from 'react';

import {

    NavItem,
    NavLink,

} from "reactstrap";
import { Link } from 'react-router-dom';

const NavItemComponent = ({ buttonText, href }) => {

    return (
        <NavItem >
            {buttonText != "Home" ? <NavLink className="active" tag={Link} to="/">
                {buttonText}
            </NavLink> : <NavLink tag="a" className="active" href="../">{buttonText}</NavLink>}
        </NavItem>
    );
};

export default NavItemComponent;

