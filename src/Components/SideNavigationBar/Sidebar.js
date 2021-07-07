import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Sidebar extends Component {
  render() {
    return (
      <div className="app-sidebar sidebar-shadow">
        <div className="app-header__logo">
          <div className="logo-src" />
          <div className="header__pane ml-auto">
            <div>
              <button
                type="button"
                className="hamburger close-sidebar-btn hamburger--elastic"
                data-class="closed-sidebar"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="app-header__mobile-menu">
          <div>
            <button
              type="button"
              className="hamburger hamburger--elastic mobile-toggle-nav"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner" />
              </span>
            </button>
          </div>
        </div>
        <div className="app-header__menu">
          <span>
            <button
              type="button"
              className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6" />
              </span>
            </button>
          </span>
        </div>{" "}
        <div className="scrollbar-sidebar">
          <div className="app-sidebar__inner">
            <ul className="vertical-nav-menu">
              <li className="app-sidebar__heading">Home</li>
              <li>
                {/* <a href="index.html" className="mm-active">
                    <i className="metismenu-icon pe-7s-rocket" />
                    Dashboard
                  </a> */}

                <Link to="/" className="mm-active">
                  <i className="metismenu-icon pe-7s-rocket" />
                  Dashboard
                </Link>
              </li>
              <li>
                {/* <a href="index.html" class="">
                  <i class="metismenu-icon pe-7s-search"></i>Search
                </a> */}
                  <Link to="/Search" className="">
                  <i className="metismenu-icon pe-7s-search" />
                  Search
                </Link>
              </li>
              {/* <li className="app-sidebar__heading">Admin</li> */}
              <li>
                <a href="#">
                  <i className="metismenu-icon pe-7s-culture" />
                  Organization
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                </a>
                <ul>
                  <li>
                    {/* <a href="elements-buttons-standard.html">
                    <i className="metismenu-icon" />
                    Add Organization
                  </a> */}
                    <Link to="/AddOrganization" className="metismenu-icon">
                      AddOrganization
                    </Link>
                  </li>
                  <li>
                    {/* <a href="elements-dropdowns.html">
                        <i className="metismenu-icon"></i>View Organization
                      </a> */}
                    <Link to="/ViewOrganization" className="metismenu-icon">
                      View Organization
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="metismenu-icon pe-7s-user" />
                  Person
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                </a>
                <ul>
                  <li>
                    {/* <a href="components-tabs.html">
                        <i className="metismenu-icon"></i>Add Person
                      </a> */}
                    <Link to="/AddPerson" className="metismenu-icon">
                      Add Person
                    </Link>
                  </li>
                  <li>
                    <a href="components-accordions.html">
                      <i className="metismenu-icon"></i>View Persons
                    </a>
                  </li>
                </ul>
              </li>

              {/* <li className="app-sidebar__heading">Activity ManageMent</li> */}
              <li>
                <a href="#">
                  <i className="metismenu-icon pe-7s-notebook" />
                  Activity ManageMent
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                </a>
                {/* <a href="dashboard-boxes.html">
                <i className="metismenu-icon pe-7s-plus" />
                 Activity 
              </a> */}
                <ul>
                  <li>
                    <a href="forms-controls.html">
                      <i className="metismenu-icon pe-7s-mouse"></i>Add Activity
                    </a>
                  </li>
                  <li>
                    <a href="forms-controls.html">
                      <i className="metismenu-icon pe-7s-mouse"></i>Modify
                      Activity
                    </a>
                  </li>
                  <li>
                    <a href="forms-layouts.html">
                      <i className="metismenu-icon pe-7s-eyedropper"></i>Vip
                      Movement
                    </a>
                  </li>
                  <li>
                    <a href="forms-layouts.html">
                      <i className="metismenu-icon pe-7s-eyedropper"></i>View
                      Vip Movement
                    </a>
                  </li>
                </ul>
              </li>

              {/* <li className="app-sidebar__heading">SB Dragnet</li> */}
              <li>
                <a href="#">
                  <i className="metismenu-icon pe-7s-network" />
                  Special Branch Dragnet
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                </a>
                <ul>
                  <li>
                    <a href="forms-layouts.html">
                      <i className="metismenu-icon pe-7s-eyedropper"></i>
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="forms-layouts.html">
                      <i className="metismenu-icon pe-7s-eyedropper"></i>
                      DSR-Unit Wise
                    </a>
                  </li>
                  <li>
                    <a href="forms-validation.html">
                      <i className="metismenu-icon pe-7s-pendrive"></i>
                      DSR-Head Wise
                    </a>
                  </li>
                  <li>
                    <a href="forms-controls.html">
                      <i className="metismenu-icon pe-7s-mouse"></i>
                      Periscope-Unit Wise
                    </a>
                  </li>
                  <li>
                    <a href="forms-layouts.html">
                      <i className="metismenu-icon pe-7s-eyedropper"></i>
                      Periscope-Head Wise
                    </a>
                  </li>
                  <li>
                    <a href="forms-validation.html">
                      <i className="metismenu-icon pe-7s-pendrive"></i>Daily
                      Activity Report by Date
                    </a>
                  </li>
                </ul>
              </li>

              {/* <li className="app-sidebar__heading">DSR & Periscope</li> */}
              <li>
                <a href="#">
                  <i className="metismenu-icon pe-7s-news-paper" />
                  DSR
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                </a>
                <ul>
                  <li>
                    <a href="charts-chartjs.html">
                      <i className="metismenu-icon pe-7s-graph2"></i>DSR-Unit
                    </a>
                  </li>
                  <li>
                    <a href="charts-chartjs.html">
                      <i className="metismenu-icon pe-7s-graph2"></i>DSR-Head
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="metismenu-icon pe-7s-news-paper" />
                  Periscope
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                </a>
                <ul>
                  <li>
                    <a href="charts-chartjs.html">
                      <i className="metismenu-icon pe-7s-graph2"></i>
                      Periscope-Unit Wise
                    </a>
                  </li>
                  <li>
                    <a href="charts-chartjs.html">
                      <i className="metismenu-icon pe-7s-graph2"></i>
                      Periscope-Head Wise
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="app-sidebar__heading">DSI</li> */}
              <li>
                <a href="#">
                  <i className="metismenu-icon pe-7s-info" />
                  DSI
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                </a>
                <ul>
                  <li>
                    <a href="elements-buttons-standard.html">
                      <i className="metismenu-icon" />
                      Add Keyword
                    </a>
                  </li>
                  <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>Generate DSI
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="app-sidebar__heading"> Court Cases</li> */}
              <li>
                <a href="#">
                  <i className="metismenu-icon pe-7s-study" />
                  Court Cases
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                </a>
                <ul>
                  <li>
                    <a href="elements-buttons-standard.html">
                      <i className="metismenu-icon" />
                      Add Court
                    </a>
                  </li>
                  <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>Generate Court
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="app-sidebar__heading"> File Management </li> */}
              <li>
                <a href="#">
                  <i className="metismenu-icon pe-7s-diskette" />
                  File Management
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                </a>
                <ul>
                  <li>
                    <a href="elements-buttons-standard.html">
                      <i className="metismenu-icon" />
                      Add FMS
                    </a>
                  </li>
                  <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>Search
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="app-sidebar__heading"> Messenger  </li> */}
              <li>
                <a href="#">
                  <i className="metismenu-icon pe-7s-mail" />
                  Messenger
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                </a>
                <ul>
                  <li>
                    <a href="elements-buttons-standard.html">
                      <i className="metismenu-icon" />
                      Compose Message
                    </a>
                  </li>
                  <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>Inbox
                    </a>
                  </li>
                </ul>
              </li>

              {/* <li className="app-sidebar__heading"> Reports  </li> */}
              <li>
                <a href="#">
                  <i className="metismenu-icon pe-7s-note2" />
                  Reports
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                </a>
                <ul>
                  <li>
                    <a href="elements-buttons-standard.html">
                      <i className="metismenu-icon" />
                      DSI Report For Districts
                    </a>
                  </li>
                  <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>Data Entry Court Report
                    </a>
                  </li>
                  <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>Activity Abstract Report
                    </a>
                  </li>
                  <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>Activity On Map
                    </a>
                  </li>
                  <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>DSI Report
                    </a>
                  </li>
                  <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>DSI Periscope Report
                    </a>
                  </li>
                  <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>DSI Ongoing
                    </a>
                  </li>
                  <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>Future Activity Details
                    </a>
                  </li>
                  <li>
                    <a href="elements-dropdowns.html">
                      <i className="metismenu-icon"></i>Rio Unchecked Activity
                      Details
                    </a>
                  </li>
                </ul>
                <li>
                  <a href="#">
                    <i className="metismenu-icon pe-7s-note2" />
                    DSI Tabular Reports
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                  </a>
                  <ul>
                    <li>
                      <a href="elements-buttons-standard.html">
                        <i className="metismenu-icon" />
                        Daily Activity Report
                      </a>
                    </li>
                    <li>
                      <a href="elements-dropdowns.html">
                        <i className="metismenu-icon"></i>Periscope Report
                      </a>
                    </li>
                    <li>
                      <a href="elements-dropdowns.html">
                        <i className="metismenu-icon"></i>Ongoing Agitations
                      </a>
                    </li>
                    <li>
                      <a href="elements-dropdowns.html">
                        <i className="metismenu-icon"></i>Days Event
                      </a>
                    </li>
                    <li>
                      <a href="elements-dropdowns.html">
                        <i className="metismenu-icon"></i>Activity Chat Report
                      </a>
                    </li>
                    <li>
                      <a href="elements-dropdowns.html">
                        <i className="metismenu-icon"></i>Survey Report
                      </a>
                    </li>
                    <li>
                      <a href="elements-dropdowns.html">
                        <i className="metismenu-icon"></i>Question Report
                      </a>
                    </li>
                  </ul>
                </li>
              </li>

              {/* <li className="app-sidebar__heading">PRO Version</li>
            <li>
              <a href="https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/" target="_blank">
                <i className="metismenu-icon pe-7s-graph2">
                </i>
                Upgrade to PRO
              </a>
            </li> */}
              <li>
                <a
                  href="https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/"
                  target="_blank"
                >
                  <i className="metismenu-icon pe-7s-lock"></i>
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
