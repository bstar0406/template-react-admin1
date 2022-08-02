/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function HeaderMenu({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url) => {
        return checkIsActive(location, url) ? "menu-item-active" : "";
    }

    return <div
        id="kt_header_menu"
        className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
        {...layoutProps.headerMenuAttributes}
    >
        {/*begin::Header Nav*/}
        {/* <ul className={`menu-nav ${layoutProps.ulClasses}`}>
            <li
                data-menu-toggle={layoutProps.menuDesktopToggle}
                aria-haspopup="true"
                className={`menu-item menu-item-submenu menu-item-rel ${getMenuItemActive('/custom')}`}>
                <NavLink className="menu-link menu-toggle" to="/custom">
                    <span className="menu-text">Management</span>
                    <i className="menu-arrow"></i>
                </NavLink>
                <div className="menu-submenu menu-submenu-classic menu-submenu-left">
                    <ul className="menu-subnav">
                        <li className={`menu-item ${getMenuItemActive('/builder')}`}>
                            <NavLink className="menu-link" to="/management/users">
                                <span className="menu-text">Users</span>
                            </NavLink>
                        </li>
                        <li className={`menu-item ${getMenuItemActive('/builder')}`}>
                            <NavLink className="menu-link" to="/management/customers">
                                <span className="menu-text">Customers</span>
                            </NavLink>
                        </li>
                     </ul>
                </div>
            </li>
        </ul> */}
        {/*end::Header Nav*/}
    </div>;
}
