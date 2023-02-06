import React from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import illustration from "../assets/ilustration.png";
import TeacherLoginField from "../components/TeacherLoginField";
import classes from "./RecoverPassword.module.css";
const RecoverPassword = () => {
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
          <h3>Recover Password</h3>
          <p>
            Don’t worry! Enter the email address associated with your account
            we’ll send a link to recover your password.
          </p>
          <TeacherLoginField/>
        </Col>
      </Row>
    </Container>
  );
};

export default RecoverPassword;
