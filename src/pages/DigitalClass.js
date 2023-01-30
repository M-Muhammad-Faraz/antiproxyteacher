import React, { useState } from "react";
import classes from "./DigitalClass.module.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvidor";
import { Classroom } from "../model/digitalclass";
import ClassTitleBar from "../components/ClassTitleBar";
import ClassNavBar from "../components/ClassNavBar";

import Tab from "react-bootstrap/Tab";
import AttendeeTab from "../components/Tabs/AttendeeTab";
import AbsenteeTab from "../components/Tabs/AbsenteeTab";
import ExceptionTab from "../components/Tabs/ExceptionTab";

const DigitalClass = () => {
  const [currentTab, setCurrentTab] = useState("first");
  const { classInfo, teacherInfo, listOfStudents } = useData();
  const classroom = new Classroom(
    classInfo.course_code,
    classInfo.lecture_id,
    classInfo.course_name,
    classInfo.time_slot,
    teacherInfo.teacher_id,
    teacherInfo.teacher_name,
    listOfStudents
  );

  return (
    <div className={"" + classes.main}>
      <ClassTitleBar classroom={classroom} />
      <Tab.Container
        onSelect={(ev) => {
          setCurrentTab(ev);
        }}
        defaultActiveKey={"first"}
      >
        <div className="row g-0">
          <div className={"col-md-3 " + classes.side}>
            <ClassNavBar
              tab={currentTab}
              attendees={classroom.attendees}
              absentees={classroom.absentees}
              exceptions={classroom.exceptions}
              total={listOfStudents.length}
            />
          </div>
          <div className="col-md-9 p-3">
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <AttendeeTab attendees={classroom.attendees} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <AbsenteeTab absentees={classroom.absentees} />
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <ExceptionTab exceptions={classroom.exceptions} />
              </Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default DigitalClass;
