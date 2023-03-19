import React, { useState } from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import illustration from "../assets/ilustration.png";
import TeacherLoginField from "../components/TeacherLoginField";
import classes from "./RecoverPassword.module.css";
import { AiOutlineMail, AiOutlineKey } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import loader from "../assets/loader.svg";

const RecoverPassword = () => {
  const [successMsg, setSuccessMsg] = useState("");
  const [error, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [loading, setLoading] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
    var er = "";
    if (email.length === 0) {
      er = "Field Cannot be empty!";
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      er = "Incorrect Email";
    } else {
      er = "";
    }
    setEmailErr(er);
    setErrorMsg("");
    setSuccessMsg("");
    if (!er) {
      setLoading(true);
      axios
        .post("http://localhost:8000/recover/teacher", { email: email })
        .then((res) => {
          setSuccessMsg("Link Sent");
        })
        .catch((e) => {
          setErrorMsg(e.response.data.message);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };
  return (
    <Container className={"" + classes.main}>
      <Row className={"" + classes.card}>
        <Col xs={6}>
          <img src={illustration} alt="Recover password illustration" />
        </Col>
        <Col
          xs={6}
          className="d-flex flex-column align-items-center justify-content-center"
        >
          <form onSubmit={submitHandler}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="w-75">
                <h3 className="text-center mb-3">RECOVER PASSWORD</h3>
                <p>
                  Don’t worry! Enter the email address associated with your
                  account we’ll send a link to recover your password.
                </p>
              </div>
              {successMsg ? (
                <span className={classes.success + " mb-2"}>{successMsg}</span>
              ) : (
                <></>
              )}
              {emailErr ? (
                <span className={classes.err + " mb-2"}>{emailErr}</span>
              ) : (
                <></>
              )}
              {error ? (
                <span className={classes.err + " mb-2"}>{error}</span>
              ) : (
                <></>
              )}
              <TeacherLoginField
                title={"Email"}
                icon={<AiOutlineMail className="me-2" />}
                value={email}
                setter={setEmail}
              />
              <div className="my-3 text-center">
                Dont have an account?{" "}
                <Link to={"/register"} className={classes.loginheading}>
                  Register
                </Link>
              </div>
              <div className="mt-3 text-center">
                {loading ? (
                  <div>
                    <img src={loader} alt="" width={180} height={90} />
                  </div>
                ) : (
                  <button className={classes.customBtn} type={"submit"}>
                    Recover
                  </button>
                )}
              </div>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default RecoverPassword;
