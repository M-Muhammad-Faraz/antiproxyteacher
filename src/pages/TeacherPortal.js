import React from "react";
import PortalFooter from "../components/PortalFooter";
import PortalNavbar from "../components/PortalNavbar";
import ScheduleItem from "../components/ScheduleItem";
import classes from "./TeacherPortal.module.css";
import WelcImg from "../assets/welcome.png";

const TeacherPortal = () => {
  return (
    <div>
      <PortalNavbar />
      <main>
        <div className="container">
          <div className="row g-0">
            <div className={"col-6 " + classes.welcomeMsg}>
              <div>Welcome Professor</div>
              <div>
                <img src={WelcImg} alt="Welcome Image" />
              </div>
            </div>
            <div className="col-6">
              <h3>Today's Schedule</h3>

              <ul style={{ margin: 0, padding: "4px" }}>
                <ScheduleItem />
                <ScheduleItem />
                <ScheduleItem />
              </ul>
            </div>
          </div>
        </div>
      </main>
      <PortalFooter />
    </div>
  );
};

export default TeacherPortal;
