import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Aside = () => {
  const location = useLocation(); // Get current route location
  const navigate = useNavigate(); // Navigate to different routes

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <aside className="dash-aside-navbar">
      <div className="position-relative">
        <div className="logo d-md-block d-flex align-items-center justify-content-between plr bottom-line pb-30">
          <a href="/">
            <img src="/images/logo/logo_01.svg" alt="Logo" />
          </a>
          <button className="close-btn d-block d-md-none">
            <i className="fa-light fa-circle-xmark" />
          </button>
        </div>
        <nav className="dasboard-main-nav pt-30 pb-30 bottom-line">
          <ul className="style-none">
            <li>
              <div className="nav-title">Listing</div>
            </li>
            {/* Highlight the active menu item dynamically */}
            <li className="plr">
              <Link
                to={"/view-task"}
                className={`d-flex w-100 align-items-center ${
                  location.pathname === "/view-task" ? "active" : ""
                }`}
              >
                <img src="/images/icon/icon_6.svg" alt="My Tasks" />
                <span>My Tasks</span>
              </Link>
            </li>
            <li className="plr">
              <Link
                to={"/create-task"}
                className={`d-flex w-100 align-items-center ${
                  location.pathname === "/create-task" ? "active" : ""
                }`}
              >
                <img src="/images/icon/icon_7_active.svg" alt="Add New Tasks" />
                <span>Add New Tasks</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="plr mt-30">
          <button
            onClick={handleLogout}
            className="d-flex w-100 align-items-center logout-btn"
          >
            <div className="icon tran3s d-flex align-items-center justify-content-center rounded-circle">
              <img src="/images/icon/icon_41.svg" alt="Logout Icon" />
            </div>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
