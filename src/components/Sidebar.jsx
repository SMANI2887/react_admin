import React, { useState } from "react";

import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
  useNavigate,
} from "react-router-dom";
import { ReactDOM } from "react-dom/client";
import Card from "./pages/Card";
import { Button } from "bootstrap";

function Sidebar() {
  const navigate = useNavigate();

  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style == "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <>
      <ul className={style} id="accordionSidebar">
        {/* <!-- Sidebar - Brand --> */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active cursor">
          <a
            className="nav-link"
            onClick={(event) => {
              event.preventDefault();
              navigate("/");
            }}
          >
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </a>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider"></hr>

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}

        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded="true"
            aria-controls="collapseTwo"
          >
            <i className="fas fa-fw fa-cog"></i>
            <span>Components</span>
          </a>

          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Components:</h6>

              <a
                className="collapse-item cursor"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/Buttons");
                }}
              >
                Buttons
              </a>

              <a
                className="collapse-item cursor"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/Card");
                }}
              >
                Cards
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-wrench"></i>
            <span>Utilities</span>
          </a>
          <div
            id="collapseUtilities"
            className="collapse"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Custom Utilities:</h6>
              <a
                className="collapse-item cursor"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/Color");
                }}
              >
                Colors
              </a>
              <a
                className="collapse-item cursor"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/Border");
                }}
              >
                Borders
              </a>
              <a
                className="collapse-item cursor"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/Animations");
                }}
              >
                Animations
              </a>
              <a
                className="collapse-item cursor"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/Other");
                }}
              >
                Other
              </a>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Addons</div>
        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Pages</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a
                className="collapse-item cursor"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/Login2");
                }}
              >
                Login
              </a>
              <a
                className="collapse-item cursor"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/Register");
                }}
              >
                Register
              </a>
              <a
                className="collapse-item cursor"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/Forgot_Password");
                }}
              >
                Forgot Password
              </a>
              <div className="collapse-divider"></div>
              <h6 className="collapse-header">Other Pages:</h6>
              <a
                className="collapse-item cursor"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/Page_Error");
                }}
              >
                404 Page
              </a>
              <a
                className="collapse-item cursor"
                onClick={(event) => {
                  event.preventDefault();
                  navigate("/Blank_Page");
                }}
              >
                Blank Page
              </a>
            </div>
          </div>
        </li>
        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item cursor">
          <a
            className="nav-link"
            onClick={(event) => {
              event.preventDefault();
              navigate("/Charts_New");
            }}
          >
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Charts</span>
          </a>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item cursor">
          <a
            className="nav-link"
            onClick={(event) => {
              event.preventDefault();
              navigate("/Tables");
            }}
          >
            <i className="fas fa-fw fa-table"></i>
            <span>Tables</span>
          </a>
        </li>
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
            onClick={changeStyle}
          ></button>
        </div>

        {/* <!-- Sidebar Message --> */}
        <div className="sidebar-card d-none d-lg-flex">
          <img
            className="sidebar-card-illustration mb-2"
            src="../src/assets/img/undraw_rocker.svg"
            alt="..."
          />
          <p className="text-center mb-2">
            <strong>SB Admin Pro</strong> is packed with premium features,
            components, and more!
          </p>
          <a
            className="btn btn-success btn-sm"
            href="https://startbootstrap.com/theme/sb-admin-pro"
          >
            Upgrade to Pro!
          </a>
        </div>
        {/* <!-- End of Sidebar --> */}
      </ul>
    </>
  );
}

export default Sidebar;
