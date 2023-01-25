import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataProvidor";
import classes from "./ScheduleItem.module.css";
const ScheduleItem = ({ item, index, setLecture, setShow }) => {
  const lectureInfo = useData();
  const navigate = useNavigate();

  return (
    <>
      <li
        id={index}
        className="d-flex justify-content-between align-items-center"
      >
        <div>
          <h4 className={"" + classes.title}>{item.course_name}</h4>
          <div className="d-flex  align-items-center">
            <p style={{ margin: "0 60px 0 0" }}>{item.course_code}</p>{" "}
            <small>({item.time_slot})</small>
          </div>
        </div>
        <div className="">
          {false ? (
            <div>
              <button
                className={
                  classes.customBtnResume + " me-2 " + classes.customBtn
                }
                onClick={() => {
                  console.log(item);
                  axios
                    .post(
                      `http://localhost:8000/start-digital-class/${item.lecture_id}`
                    )
                    .then((res) => {
                      console.log(res);
                      lectureInfo.setListOfStudents(res.data.data);
                      lectureInfo.setClassInfo(item);
                      lectureInfo.setQrCode(res.data.qrcode);
                      navigate("/digital-class");
                    });
                }}
              >
                Resume Class
              </button>
              <button
                className={classes.customBtnStop + " " + classes.customBtn}
                onClick={() => {
                  console.log(item);
                  axios
                    .post(
                      `http://localhost:8000/start-digital-class/${item.lecture_id}`
                    )
                    .then((res) => {
                      console.log(res);
                      lectureInfo.setListOfStudents(res.data.data);
                      lectureInfo.setClassInfo(item);
                      lectureInfo.setQrCode(res.data.qrcode);
                      navigate("/digital-class");
                    });
                }}
              >
                Stop Class
              </button>
            </div>
          ) : (
            <button
              className={" " + classes.customBtn}
              onClick={() => {
                setLecture(item);
                setShow(true);
              }}
            >
              Start Class
            </button>
          )}
        </div>
      </li>
      <hr />
    </>
  );
};

export default ScheduleItem;
