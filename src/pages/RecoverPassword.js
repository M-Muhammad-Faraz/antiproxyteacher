import React from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
import illustration from "../assets/ilustration.png";
import classes from "./RecoverPassword.module.css";
const RecoverPassword = () => {
  return (
    <Container className={"" + classes.main}>
      <Row className={"" + classes.card}>
        <Col xs={6}>
          <img src={illustration} alt="Recover password illustration" />
        </Col>
        <Col xs={6}>
          <h3>Recover Password</h3>
          <p>
            Don’t worry! Enter the email address associated with your account
            we’ll send a link to recover your password.
          </p>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ borderRadius: 25, width: 180 }}
            >
              Send Link
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RecoverPassword;
