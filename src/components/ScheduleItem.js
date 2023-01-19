import React from "react";
import classes from "./ScheduleItem.module.css";
const ScheduleItem = () => {
  return (
    <li className="d-flex justify-content-between align-items-center">
      <div>
        <h4>Professional Ethi...</h4>
        <div className="d-flex justify-content-between align-items-center">
          <p style={{ margin: 0 }}>HMCS1723</p> <small>(14:00 - 14:50)</small>
        </div>
      </div>
      <div>
        <button className="btn btn-primary">Start Class</button>
      </div>
    </li>
  );
};

export default ScheduleItem;
