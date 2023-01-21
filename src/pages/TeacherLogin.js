import React, { useEffect, useState } from "react";
import TeacherLoginField from "../components/TeacherLoginField";
import classes from "./TeacherLogin.module.css";
import { AiOutlineMail, AiOutlineKey } from "react-icons/ai";
import { Link, redirect } from "react-router-dom";
import axios from "axios";
import { onAuthStateChanged, signInWithCustomToken } from "firebase/auth";
import { auth } from "../settings/firebase";
import loaderImg from "../assets/loader.svg";
const TeacherLogin = () => {
  useEffect(() => {
    if (auth.currentUser) {
      redirect("/");
    }
  }, [auth]);
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [resErr, setResErr] = useState("");

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (screenWidth < 800) {
      setShowElement(false);
    } else {
      setShowElement(true);
    }
  }, [screenWidth]);

  const submitHandler = async () => {
    let isError = false;
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailErr("Invalid email address");
      isError = true;
    } else {
      setEmailErr("");
    }
    // validate password
    if (password.length < 8) {
      setPasswordErr("Password must be at least 8 characters long");
      isError = true;
    } else {
      setPasswordErr("");
    }
    if (!isError) {
      setLoader(true);
      try {
        const res = await axios.post(
          "http://localhost:8000/auth-teacher",
          { email: email, password, password },
          { headers: { "content-type": "application/json" } }
        );
        const user = await signInWithCustomToken(auth, res.data.token);
        console.log(user);
      } catch (error) {
        console.log(error);
        if (error.response.data.err) {
          setResErr(error.response.data.err);
        } else {
        }
      } finally {
        setLoader(false);
      }
    }
  };
  return (
    <div className={classes.fullWindow}>
      <div className={classes.background}></div>
      <div className={"row g-0 " + classes.fullWindow}>
        {showElement && (
          <div className="col-6 d-flex flex-column justify-content-center p-3">
            <h1 className="text-light">Welcome to </h1>
            <h4 className="text-light">
              Anti Proxy Based Presence <br /> Assurance System
            </h4>
          </div>
        )}
        <div
          className={
            showElement
              ? "col-6 d-flex flex-column align-items-center justify-content-center p-3 " +
                classes.card
              : "col-12 d-flex flex-column align-items-center justify-content-center p-3 " +
                classes.card
          }
        >
          <h3 className={"mb-3 " + classes.loginheading}>LOGIN</h3>
          <small className={classes.err + " mb-2"}>{resErr && resErr}</small>
          <form>
            <small className={classes.err}>{emailErr && emailErr}</small>
            <TeacherLoginField
              icon={<AiOutlineMail className="me-2" />}
              title={"Email"}
              type="email"
              setter={setEmail}
            />

            <small className={classes.err}>{passwordErr && passwordErr}</small>
            <TeacherLoginField
              icon={<AiOutlineKey className="me-2" />}
              title={"Password"}
              type="password"
              setter={setPassword}
            />
            <div className="d-flex justify-content-between">
              <div>
                <Link className={classes.loginheading}>Forget Password</Link>
              </div>
              <div className="d-flex align-items-center">
                <input type="checkbox" className="me-1" />
                <label>Remember</label>
              </div>
            </div>
            <div className="my-3 text-center">
              Dont have an account?{" "}
              <Link to={"/register"} className={classes.loginheading}>
                Register
              </Link>
            </div>
            {loader ? (
              <div className="text-center mt-3">
                <img width={160} height={100} src={loaderImg} alt="" />
              </div>
            ) : (
              <div
                className={classes.customBtn + " mt-3"}
                onClick={submitHandler}
              >
                LOGIN
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default TeacherLogin;
