import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import NameInput from "./nameinput";

function FormSection(onLoginSuccess) {
  let [currentIcon, setcurrentIcon] = useState(faEye);
  let [password, setpassword] = useState("");
  let [email, setemail] = useState("");
  let [loginSuccess, setLoginSuccess] = useState(false);
  let iconChange = () => {
    let newIcon = currentIcon == faEye ? faEyeSlash : faEye;
    setcurrentIcon(newIcon);

    let passwordInput = document.getElementById("exampleInputPassword1");

    newIcon == faEyeSlash
      ? (passwordInput.type = "text")
      : (passwordInput.type = "password");
  };
  let inputEvaluate = () => {
    let emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let successInput = document.querySelector(".success-message");
    let mailInput = document.querySelector(".error-message-mail");
    let pwdInput = document.querySelector(".error-message-pwd");

    let emailValid = emailRegex.test(email);
    let passwordValid = passwordRegex.test(password);

    if (emailValid && passwordValid == true) {
      successInput.style.display = "block";
      mailInput.style.display = "none";
      pwdInput.style.display = "none";
      setLoginSuccess(true);
      onLoginSuccess = true;
    } else if (emailValid == false) {
      successInput.style.display = "none";
      mailInput.style.display = "block";
      pwdInput.style.display = "none";
    } else {
      successInput.style.display = "none";
      mailInput.style.display = "none";
      pwdInput.style.display = "block";
    }
    // ? alert("login successful")
    // : alert("invalid input");

    console.log(`Email id: ${email}, Password: ${password}`);

    setTimeout(() => {
      setemail("");
      setpassword("");
    }, 100);
  };

  return (
    <div className="centered-container" style={{ backgroundColor: "gold" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        {loginSuccess ? (
          <NameInput />
        ) : (
          <div className="row justify-content-center align-items-center">
            <div className="justify-content-center">
              <Form
                style={{
                  width: "300px",
                  border: "2px solid #000",
                  padding: "30px",
                  borderRadius: "15px",
                  backgroundColor: "greenyellow",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    value={email}
                    style={{
                      border: "2px solid #000",
                      backgroundColor: "antiquewhite",
                    }}
                    onChange={(e) => {
                      setemail(e.target.value);
                    }}
                  />
                  <span
                    className="error-message-mail"
                    style={{
                      display: "none",
                      color: "red",
                    }}
                  >
                    Invalid email
                  </span>
                </div>
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Password
                </label>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="password"
                    id="exampleInputPassword1"
                    style={{
                      border: "2px solid #000",
                      backgroundColor: "antiquewhite",
                    }}
                    value={password}
                    onChange={(e) => {
                      setpassword(e.target.value);
                    }}
                  />
                  <InputGroup.Text
                    style={{
                      width: "50px",
                      border: "2px solid #000",
                      backgroundColor: "antiquewhite",
                    }}
                    onClick={iconChange}
                  >
                    <FontAwesomeIcon
                      icon={currentIcon}
                      style={{ cursor: "pointer" }}
                    />
                  </InputGroup.Text>
                </InputGroup>
                <div
                  className="error-message-pwd"
                  style={{ display: "none", color: "red" }}
                >
                  <span>Invalid password</span>

                  <ul>
                    <li>It must contain at least one digit.</li>
                    <li>It must contain at least one lowercase letter.</li>
                    <li>It must contain at least one uppercase letter.</li>
                    <li>It must be at least 8 characters in length.</li>
                  </ul>
                </div>
                <Button
                  className="w-100"
                  style={{ backgroundColor: "purple" }}
                  onClick={inputEvaluate}
                >
                  Login
                </Button>
                <span
                  className="success-message"
                  style={{
                    display: "none",
                    color: "green",
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Login Successful
                  <FontAwesomeIcon icon={faSquareCheck} />
                </span>
              </Form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FormSection;
