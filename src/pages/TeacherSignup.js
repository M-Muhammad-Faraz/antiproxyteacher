import axios from "axios";
import React, { useState } from "react";
import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineKey,
} from "react-icons/ai";
import { GrPowerReset } from "react-icons/gr";
import TeacherSignupField from "../components/TeacherSignupField";

import loaderImg from "../assets/loader.svg";

import classes from "./TeacherSignup.module.css";
import { Link } from "react-router-dom";

const TeacherSignup = () => {
  const [fullName, setFullname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");

  const [formErr, setFormErr] = useState("");

  const [successMsg, setSuccessMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);

  const NameValidator = (value) => {
    console.log(value);
    if (value.length >= 3) {
      return true;
    } else {
      return false;
    }
  };
  const PhoneValidator = (value) => {
    if (value >= 11) {
      return true;
    } else {
      return false;
    }
  };
  const EmailValidator = (value) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      return true;
    } else {
      return false;
    }
  };
  const PasswordValidator = (value) => {
    if (value.length > 8) {
      return true;
    } else {
      return false;
    }
  };
  const CpassValidator = (value) => {
    if (value == pass) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = () => {
    if (
      NameValidator(fullName) &&
      PhoneValidator(phoneNo) &&
      EmailValidator(email) &&
      PasswordValidator(pass) &&
      CpassValidator(cPass)
    ) {
      const creds = {
        teacher_name: fullName,
        teacher_phone: phoneNo,
        teacher_email: email,
        teacher_password: pass,
      };
      setFormErr("");
      console.log(creds);
      setLoading(true);
      axios
        .post("http://localhost:8000/register-new-teacher", creds, {
          headers: { "content-type": "application/json" },
        })
        .then((res) => {
          setErr(false);
          setSuccessMessage(res.data.message);
          setLoading(false);
        })
        .catch((err) => {
          setErr(true);
          setErrMsg(err.data.err);
          setLoading(false);
        });
    } else {
      setFormErr("Fill all blanks correctly first");
    }
  };

  return (
    <div className="row">
      <div className={"col-3 " + classes.side}></div>
      <div className="col-9 d-flex align-items-center justify-content-center flex-column">
        <div className={"mb-3 " + classes.heading1}>SIGNUP</div>
        {formErr && <small className="mb-2 text-danger">{formErr}</small>}
        {err ? (
          <small className="mb-2 text-danger">{errMsg}</small>
        ) : (
          <small className="mb-2 text-success">{successMsg}</small>
        )}
        <form>
          <TeacherSignupField
            title={"Full Name"}
            icon={<AiOutlineUser className="me-2" size={20} />}
            handler={setFullname}
            validator={NameValidator}
            type={"text"}
          />
          <TeacherSignupField
            title={"Phone Number"}
            icon={<AiOutlinePhone className="me-2" size={20} />}
            handler={setPhoneNo}
            type={"text"}
            validator={PhoneValidator}
          />
          <TeacherSignupField
            title={"Email"}
            icon={<AiOutlineMail className="me-2" size={20} />}
            handler={setEmail}
            type="email"
            validator={EmailValidator}
          />
          <TeacherSignupField
            title={"Password"}
            icon={<AiOutlineKey className="me-2" size={20} />}
            handler={setPass}
            type="password"
            validator={PasswordValidator}
          />
          <TeacherSignupField
            title={"Confirm Password"}
            icon={<GrPowerReset className="me-2" size={20} />}
            handler={setCPass}
            type={"password"}
            validator={CpassValidator}
          />
          <div className={classes.check}>
            <input type="checkbox" />{" "}
            <label>
              Agree to the{" "}
              <a href="http://www.google.com" className={classes.mainClr}>
                terms and conditions
              </a>
              .
            </label>
          </div>
          {loading ? (
            <div className="text-center mt-3">
              <img width={160} height={100} src={loaderImg} alt="" />
            </div>
          ) : (
            <div className={classes.customBtn + " mt-3"} onClick={handleSubmit}>
              REGISTER
            </div>
          )}
          <div className="text-center mt-2">
            <small>
              Already have an account?
              <Link to={"/login"} className={classes.mainClr + " ms-1"}>
                Login
              </Link>
            </small>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeacherSignup;
