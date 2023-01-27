import React, { useState } from "react";
import classes from "./ClassNavBar.module.css";
import Nav from "react-bootstrap/Nav";
const ClassNavBar = ({ tab, attendees, absentees, exceptions, total }) => {
  console.log("at", attendees);
  console.log("ab", absentees);
  console.log("ex", exceptions);
  return (
    <div
      className="d-flex justify-content-between flex-column p-3"
      style={{ height: "inherit" }}
    >
      <ul style={{ listStyle: "none", padding: "0" }} className="mt-2">
        <li className="d-flex align-items-center justify-content-between">
          <Nav.Link
            eventKey="first"
            className={"first" === tab ? classes.activeNav : classes.regNav}
          >
            Attendees
          </Nav.Link>

          <div
            className={
              "first" === tab ? classes.activeToffee : classes.regToffee
            }
          >
            {attendees.length}
          </div>
        </li>
        <li className="d-flex align-items-center justify-content-between">
          <Nav.Link
            eventKey="second"
            className={"second" === tab ? classes.activeNav : classes.regNav}
          >
            Absentees
          </Nav.Link>
          <div
            className={
              "second" === tab ? classes.activeToffee : classes.regToffee
            }
          >
            {absentees.length}
          </div>
        </li>
        <li className="d-flex align-items-center justify-content-between">
          <Nav.Link
            eventKey="third"
            className={"third" === tab ? classes.activeNav : classes.regNav}
          >
            Exceptions
          </Nav.Link>
          <div
            className={
              "third" === tab ? classes.activeToffee : classes.regToffee
            }
          >
            {exceptions.length}
          </div>
        </li>
      </ul>
      <div className="text-center">
        Total Students: <strong>{total}</strong>
      </div>
    </div>
  );
};

export default ClassNavBar;
