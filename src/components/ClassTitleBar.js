import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvidor";
import classes from "./ClassTitleBar.module.css";

const ClassTitleBar = ({ classroom }) => {
  const navigate = useNavigate();
  const { setClassInfo, setListOfStudents, setIsClassStarted } = useData();
  return (
    <div
      className={
        "d-flex justify-content-between align-items-center p-3 " +
        classes.navbar
      }
    >
      <div>
        <h3>{classroom.teacher_name}</h3>
        <span>Class time: {classroom.time_slot}</span>
      </div>
      <div className="text-center">
        <h3>{classroom.course_name}</h3>
        <span>{classroom.course_code}</span>
      </div>
      <div className="d-flex align-items-center">
        <div className="me-2">Notification</div>
        <div>
          <button
            className={"" + classes.dangerBtn}
            onClick={() => {
              axios.post(
                `http://localhost:8000/stop-digital-class/${classroom.lecture_id}`
              );
              setClassInfo({});
              setListOfStudents([]);
              navigate("/");
              setIsClassStarted(false);
            }}
          >
            End Class
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClassTitleBar;
