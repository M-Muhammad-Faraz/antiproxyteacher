import React from "react";
import { useData } from "../context/DataProvidor";
import classes from "./PortalNavbar.module.css";

function titleCase(str) {
  str = str.toLowerCase();
  str = str.split(" ");
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(" "); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}

const PortalNavbar = () => {
  const userData = useData();
  return (
    <div className={"fixed-top " + classes.navbar}>
      <header
        className={
          "container p-2 d-flex justify-content-between align-items-center  "
        }
      >
        <div className={"d-flex align-items-center " + classes.profile}>
          <div className={classes.profilePic}>
            <div
              className={
                classes.inner +
                " d-flex align-items-center justify-content-center"
              }
            >
              {userData.user.displayName[0].toUpperCase()}
            </div>
          </div>
          <div className="ms-2">
            <h4>{titleCase(userData.user.displayName)}</h4>
            <small>Visiting Lecturar</small>
          </div>
        </div>
        <div className={"d-flex " + classes.navlinks}>
          <div className="me-2">Dashboard</div>
          <div className="me-2">Settings</div>
          <div onClick={userData.signout}>Logout</div>
        </div>
      </header>
    </div>
  );
};

export default PortalNavbar;
