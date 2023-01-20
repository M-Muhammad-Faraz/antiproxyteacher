import React from "react";
import PortalFooter from "../components/PortalFooter";
import PortalNavbar from "../components/PortalNavbar";
import ScheduleItem from "../components/ScheduleItem";
import classes from "./TeacherPortal.module.css";
import WelcImg from "../assets/welcome.png";
import { useData } from "../context/DataProvidor";

const TeacherPortal = () => {
  const { lectures } = useData();
  console.log(lectures);
  return (
    <div>
      <PortalNavbar />
      <main className={"" + classes.main}>
        <div className="container">
          <div className="row g-0">
            <div className={"col-6 position-relative " + classes.welcomeMsg}>
              <div className="position-absolute">
                <img
                  src={WelcImg}
                  alt="Welcome Image"
                  width={300}
                  height={400}
                />
              </div>
              <div>
                <h4>Welcome</h4>
                <h1>Professor</h1>{" "}
              </div>
            </div>
            <div className="col-6">
              <h3>Today's Schedule</h3>

              <ul style={{ margin: 0, padding: "4px" }}>
                {lectures.map((item, index) => {
                  return <ScheduleItem item={item} id={index} />;
                })}
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
