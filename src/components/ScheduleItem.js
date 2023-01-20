import React from "react";
import classes from "./ScheduleItem.module.css";
const ScheduleItem = ({ item, index }) => {
  return (
    <li
      id={index}
      className="d-flex justify-content-between align-items-center"
    >
      <div>
        <h4 className={"" + classes.title}>{item.course_name}</h4>
        <div className="d-flex justify-content-between align-items-center">
          <p style={{ margin: 0 }}>{item.course_code}</p>{" "}
          <small>({item.time_slot})</small>
        </div>
      </div>
      <div>
        <button className="btn btn-primary">Start Class</button>
      </div>
    </li>
  );
};

export default ScheduleItem;
