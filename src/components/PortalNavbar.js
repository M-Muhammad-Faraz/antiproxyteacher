import React, { useState } from "react";
import { useData } from "../context/DataProvidor";
import classes from "./PortalNavbar.module.css";
import { AiOutlineLogout, AiOutlineSetting } from "react-icons/ai";
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
  const [logoutHover, setLogoutHover] = useState(false);
  const [hover, setHover] = useState(false);
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
          <div
            className="me-2"
            style={{ cursor: "pointer" }}
            onMouseEnter={() => {
              setHover(true);
            }}
            onMouseLeave={() => {
              setHover(false);
            }}
          >
            <span className={hover ? "me-1 " + classes.mainClr : "me-1 "}>
              Setting
            </span>{" "}
            <AiOutlineSetting className={hover ? classes.mainClr : ""} />
          </div>
          <div
            onClick={userData.signout}
            className={"d-flex align-items-center "}
            style={{ cursor: "pointer" }}
            onMouseEnter={() => {
              setLogoutHover(true);
            }}
            onMouseLeave={() => {
              setLogoutHover(false);
            }}
          >
            <span className={logoutHover ? "me-1 " + classes.mainClr : "me-1 "}>
              Logout
            </span>{" "}
            <AiOutlineLogout className={logoutHover ? classes.mainClr : ""} />
          </div>
        </div>
      </header>
    </div>
  );
};

export default PortalNavbar;
