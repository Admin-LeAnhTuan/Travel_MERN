import React, { useState } from "react";
import { Container, Row, Col, Button, Form, FormGroup } from "reactstrap";

import LoginImg from "../assets/images/Logo/Login_img.avif";
import avtImg from "../assets/images/Logo/user_img.png";
import { Link } from "react-router-dom";

import "../styles/login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
  });

  const handlerChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handlerClick = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="8" className="m-auto">
            <div className="login__container d-flex align-items-center justify-content-between">
              <div className="login__img">
                <img src={LoginImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={avtImg} alt="" />
                </div>
                <h2>Login</h2>

                <Form onSubmit={handlerClick}>
                  <FormGroup>
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      id="email"
                      onChange={handlerChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <input
                      type="password"
                      placeholder="Password"
                      required
                      id="password"
                      onChange={handlerChange}
                    />
                  </FormGroup>
                  <div className="options d-flex ">
                    <p className="check">
                      <input
                        className="checkbox"
                        type="checkbox"
                        placeholder={""}
                        pattern={"I arge"}
                      />
                      agree to remember
                    </p>
                    <p className="forgot__password align-items-center">
                      <Link to={"/forgot"}>Forgot Password</Link>
                    </p>
                  </div>
                  <Button
                    className="btn auth__btn secondary__btn "
                    type="submit"
                  >
                    Login
                  </Button>
                </Form>
                <p>
                  Don't have an account?{" "}
                  <Link to={"/register"}>Create account</Link>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
