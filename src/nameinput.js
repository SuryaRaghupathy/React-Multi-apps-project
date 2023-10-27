import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function NameInput() {
  let [text, setText] = useState("");

  let inputEvaluate = () => {
    console.log(`Name: ${text}`);
  };
  return (
    <div>
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
                  <label htmlFor="exampleInputName" className="form-label">
                    Enter your name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputName"
                    aria-describedby="emailHelp"
                    value={text}
                    style={{
                      border: "2px solid #000",
                      backgroundColor: "antiquewhite",
                    }}
                    onChange={(e) => {
                      setText(e.target.value);
                    }}
                  />
                </div>
                <Button
                  className="w-100"
                  style={{ backgroundColor: "purple" }}
                  onClick={inputEvaluate}
                >
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NameInput;
