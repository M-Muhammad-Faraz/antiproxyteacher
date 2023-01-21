import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvidor";
import { Classroom } from "../model/digitalclass";

const DigitalClass = () => {
  const navigate = useNavigate();
  const {
    classInfo,
    listOfStudents,
    setClassInfo,
    setListOfStudents,
    setIsClassStarted,
  } = useData();
  const classroom = new Classroom(
    classInfo.course_code,
    classInfo.lecture_id,
    classInfo.course_name,
    classInfo.time_slot,
    classInfo.teacher_id,
    listOfStudents
  );
  console.log(classroom.getLists());
  return (
    <div>
      DigitalClass{" "}
      <button
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
        End Digital Class
      </button>
    </div>
  );
};

export default DigitalClass;
