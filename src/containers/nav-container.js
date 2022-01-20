import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";

const NavContainer = props => {

    return (
        <div className="nav-wrapper">
            <div className="nav-link-wrapper">
                <NavLink exact to="/" className="nav-link-inactive" activeClassName="nav-link-active">
                    Home
                </NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink to="/travel" className="nav-link-inactive" activeClassName="nav-link-active">
                    Travel
                </NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink to="/energy" className="nav-link-inactive" activeClassName="nav-link-active">
                    Energy
                </NavLink>
            </div>

            <div className="nav-link-wrapper">
                <NavLink to="/contact" className="nav-link-inactive" activeClassName="nav-link-active">
                    Contact
                </NavLink>
            </div>
            <div className="nav-link-wrapper">
                <NavLink to="/sources" className="nav-link-inactive" activeClassName="nav-link-active">
                    Sources
                </NavLink>
            </div>
        </div>
    );
};

export default withRouter(NavContainer);