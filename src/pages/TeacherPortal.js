import React, { useState } from "react";
import PortalFooter from "../components/PortalFooter";
import PortalNavbar from "../components/PortalNavbar";
import ScheduleItem from "../components/ScheduleItem";
import classes from "./TeacherPortal.module.css";
import WelcImg from "../assets/welcome.png";
import { useData } from "../context/DataProvidor";
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const TeacherPortal = () => {
  const { lectures, setListOfStudents, setQrCode, setClassInfo, setCode } =
    useData();
  const [lecture, setLecture] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [modalClassShow, setModalClassShow] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <PortalNavbar show={modalShow} setShow={setModalShow} />
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">SETTING</Modal.Title>
        </Modal.Header>
        <Modal.Body>Form</Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setModalShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      <Modal
        show={modalClassShow}
        onHide={() => setModalClassShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className={"" + classes.modal}>
          <h4>Are you sure you want to start digital class? </h4>
          <div>
            <p className="text-start ">
              <strong>Subject name: </strong>
              {lecture.course_name} <br />
              <strong>Time Slot: </strong>
              {lecture.time_slot}
            </p>
          </div>
          <div>
            <button
              className={classes.customBtn + " me-2 " + classes.dangerBtn}
              onClick={() => setModalClassShow(false)}
            >
              Go Back
            </button>{" "}
            <button
              className={"" + classes.customBtn}
              onClick={() => {
                axios
                  .post(
                    `http://localhost:8000/start-digital-class/${lecture.lecture_id}`
                  )
                  .then((res) => {
                    console.log(res);
                    setListOfStudents(res.data.data);
                    setClassInfo(lecture);
                    setQrCode(res.data.qrcode);
                    setCode(res.data.code);
                    navigate("/digital-class");
                  });
              }}
            >
              Generate QR
            </button>
          </div>
        </Modal.Body>
      </Modal>
      <main className={"" + classes.main}>
        <div className="container">
          <div className="row g-0">
            <div className={"col-6 d-flex align-items-center "}>
              <div className={"" + classes.welcomeMsg}>
                <h4>Welcome</h4>
                <h1>Professor</h1>{" "}
              </div>
              <div className={"" + classes.welcomeImg}>
                <img src={WelcImg} alt="Person waving hand" />
              </div>
            </div>
            <div className={"col-6 " + classes.classList}>
              <h3 className={"text-center mb-2 " + classes.mainText}>
                Today's Schedule
              </h3>

              <ul style={{ margin: 0, padding: "4px" }}>
                {lectures.map((item, index) => {
                  return (
                    <ScheduleItem
                      item={item}
                      id={index}
                      setLecture={setLecture}
                      setShow={setModalClassShow}
                    />
                  );
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
