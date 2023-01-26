import React, { useState } from "react";
import classes from "./DigitalClass.module.css";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvidor";
import { Classroom } from "../model/digitalclass";
import ClassTitleBar from "../components/ClassTitleBar";
import ClassNavBar from "../components/ClassNavBar";

import Tab from "react-bootstrap/Tab";

const DigitalClass = () => {
  const [currentTab, setCurrentTab] = useState("first");
  const { classInfo, listOfStudents } = useData();
  const classroom = new Classroom(
    classInfo.course_code,
    classInfo.lecture_id,
    classInfo.course_name,
    classInfo.time_slot,
    classInfo.teacher_id,
    "Professor",
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
          <div className="col-md-9">
            <Tab.Content>
              <Tab.Pane eventKey="first">Tab 1</Tab.Pane>
              <Tab.Pane eventKey="second">Tab 2</Tab.Pane>
              <Tab.Pane eventKey="third">Tab 3</Tab.Pane>
            </Tab.Content>
          </div>
        </div>
      </Tab.Container>
    </div>
  );
};

export default DigitalClass;
