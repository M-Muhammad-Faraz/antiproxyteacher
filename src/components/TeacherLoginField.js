import React from "react";
import classes from "./TeacherLoginField.module.css";
const TeacherLoginField = ({ icon, title }) => {
  return (
    <div className={"row " + classes.customInp}>
      <div className="col-4 me-2 d-flex align-items-center">
        {icon} <label>{title}</label>
      </div>
      <div className={"col-8 " + classes.inp}>
        <input type="text" />
      </div>
    </div>
  );
};

export default TeacherLoginField;
