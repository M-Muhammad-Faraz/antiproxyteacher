import React from "react";
import classes from "./PortalNavbar.module.css";
const PortalNavbar = () => {
  return (
    <header className="container p-2 d-flex justify-content-between align-items-center">
      <div className={"d-flex align-items-center " + classes.profile}>
        <div className={classes.profilePic}>
          <div
            className={
              classes.inner +
              " d-flex align-items-center justify-content-center"
            }
          >
            P
          </div>
        </div>
        <div className="ms-2">
          <h4>Professor</h4>
          <small>Visiting Lecturar</small>
        </div>
      </div>
      <div className={"d-flex " + classes.navlinks}>
        <div className="me-2">Dashboard</div>
        <div className="me-2">Settings</div>
        <div>Logout</div>
      </div>
    </header>
  );
};

export default PortalNavbar;
