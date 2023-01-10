import React, { useState } from "react";
import TeacherLoginField from "../components/TeacherLoginField";
import classes from "./TeacherLogin.module.css";
import { AiOutlineMail, AiOutlineKey } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitHandler = async () => {
    const res = await axios.post(
      "http://localhost:8000/auth-teacher",
      { email: email, password, password },
      { headers: { "content-type": "application/json" } }
    );
    console.log(res);
  };
  return (
    <div className={classes.fullWindow}>
      <div className={classes.background}></div>
      <div className={"row g-0 " + classes.fullWindow}>
        <div className="col-6 d-flex flex-column justify-content-center p-3">
          <h1 className="text-light">Welcome to </h1>
          <h4 className="text-light">
            Anti Proxy Based Presence <br /> Assurance System
          </h4>
        </div>
        <div className="col-6 d-flex flex-column align-items-center justify-content-center p-3">
          <h3 className={"mb-4"}>LOGIN</h3>
          <form>
            <TeacherLoginField
              icon={<AiOutlineMail className="me-2" />}
              title={"Email"}
              type="email"
              setter={setEmail}
            />
            <TeacherLoginField
              icon={<AiOutlineKey className="me-2" />}
              title={"Password"}
              type="password"
              setter={setPassword}
            />
            <div className="d-flex justify-content-between">
              <div>
                <Link>Forget Password</Link>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-1" />
                <label>Remember</label>
              </div>
            </div>
            <div className="my-3 text-center">
              Dont have an account? <Link to={"/"}>Register</Link>
            </div>
            <div
              className={classes.customBtn + " mt-3"}
              onClick={submitHandler}
            >
              LOGIN
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
