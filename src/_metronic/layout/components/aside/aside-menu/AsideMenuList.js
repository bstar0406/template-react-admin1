/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {useLocation} from "react-router";
import {NavLink}  from "react-router-dom";
import SVG from "react-inlinesvg";
import {toAbsoluteUrl, checkIsActive} from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
        ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
        : "";
  };

  return (
      <>
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>

          <li
              className={`menu-item menu-item-submenu ${getMenuItemActive(
                  "/management", true
              )}`}
              aria-haspopup="true"
              data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/management">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Bag2.svg")}/>
            </span>
              <span className="menu-text">Management</span>
            </NavLink>
            <div className="menu-submenu">
              <i className="menu-arrow"/>
              <ul className="menu-subnav">
                <li className="menu-item menu-item-parent" aria-haspopup="true">
                <span className="menu-link">
                  <span className="menu-text">Management</span>
                </span>
                </li>
                {/*begin::2 Level*/}
                <li
                    className={`menu-item ${getMenuItemActive(
                        "/management/users"
                    )}`}
                    aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/management/users">
                    <i className="menu-bullet menu-bullet-dot">
                      <span/>
                    </i>
                    <span className="menu-text">User</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
                {/*begin::2 Level*/}
                <li
                    className={`menu-item ${getMenuItemActive(
                        "/management/customers"
                    )}`}
                    aria-haspopup="true"
                >
                  <NavLink className="menu-link" to="/management/customers">
                    <i className="menu-bullet menu-bullet-dot">
                      <span/>
                    </i>
                    <span className="menu-text">Customer</span>
                  </NavLink>
                </li>
                {/*end::2 Level*/}
              </ul>
            </div>
          </li>
        </ul>
      </>
  );
}
