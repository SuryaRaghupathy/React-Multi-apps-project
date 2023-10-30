import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faSquareCheck,
} from "@fortawesome/free-regular-svg-icons";
import ClockCount from "./clocktimer";

function TaskInput() {
  const [tasks, setTasks] = useState([]);
  const [password, setPassword] = useState("");
  const [displayTaskTab, setDisplayTaskTab] = useState(true);
  const [displayTimeTab, setDisplayTimeTab] = useState(false);
  const [fullTime, setFullTime] = useState("");
  const [newDisplayFullDate, setNewDisplayFullDate] = useState("");

  let displayTime;

  function displayTask() {
    const presentDate = new Date();
    const displayMonth = presentDate.getMonth() + 1;
    const displayDate = presentDate.getDate();
    const displayYear = presentDate.getFullYear();
    const hours = presentDate.getHours().toString().padStart(2, "0");
    const minutes = presentDate.getMinutes().toString().padStart(2, "0");
    const seconds = presentDate.getSeconds().toString().padStart(2, "0");
    const session = hours >= 12 ? "PM" : "AM";
    let taskFullTime = `${hours}:${minutes}:${seconds} ${session}`;
    let taskNewDisplayFullDate = ` ${displayDate}/${displayMonth}/${displayYear}`;
    setFullTime(taskFullTime);
    console.log(taskFullTime, taskNewDisplayFullDate);
    if (password !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          text: password,
          done: false,
        },
      ]);

      setDisplayTaskTab(true);
      setDisplayTimeTab(false);
      setPassword("");
    }
  }

  let completeTaskIdentifier = (index) => {
    let highlightedTasks = [...tasks];
    highlightedTasks[index].done = !highlightedTasks[index].done;
    setTasks(highlightedTasks);
  };
  let deleteTask = (index) => {
    let updatedTasks = tasks.filter(
      (currentElement, currentElementIndex) => currentElementIndex !== index
    );
    setTasks(updatedTasks);
  };
  displayTime = (fullTime, newDisplayFullDate) => {
    console.log(fullTime, newDisplayFullDate);
    setDisplayTaskTab(false);
    setDisplayTimeTab(true);
    if (password !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          timetext: fullTime + newDisplayFullDate,
          done: false,
        },
      ]);
    }
  };
  return (
    <div>
      <div style={{ backgroundColor: "gold" }}>
        <div
          className="container"
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
              margin: "-300px",
              marginLeft: "600px",
            }}
          >
            <ClockCount />
          </div>

          <div className="row justify-content-center align-items-center">
            <div>
              <Form
                style={{
                  width: "1200px",
                  border: "2px solid #000",
                  padding: "30px",
                  borderRadius: "15px",
                  backgroundColor: "greenyellow",
                  boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Enter the task details
                </label>
                <InputGroup className="mb-3" style={{ display: "flex" }}>
                  <Form.Control
                    type="text"
                    id="exampleInputPassword1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{
                      border: "2px solid #000",
                      backgroundColor: "antiquewhite",
                    }}
                  />

                  <Button
                    className="w-25"
                    onClick={displayTask}
                    style={{
                      backgroundColor: "purple",
                      border: "2px solid #000",
                    }}
                  >
                    Add Task
                  </Button>
                </InputGroup>
                <div className="input-text">
                  {tasks.map((task, index) => (
                    <div
                      className="input-text-content"
                      style={{
                        display: "flex",
                        border: "2px solid #000",
                        backgroundColor: task.done ? "green" : "antiquewhite",
                        padding: "5px",
                        justifyContent: "space-between",
                        maxHeight: "40px",
                        borderRadius: "10px",
                        margin: "10px",
                      }}
                    >
                      <div>{displayTaskTab ? task.text : task.timetext}</div>
                      <div
                        style={{
                          display: "flex",
                          backgroundColor: task.done ? "green" : "antiquewhite",
                          padding: "5px",

                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          className="w-5"
                          onClick={displayTime}
                          style={{
                            width: "180px",
                            backgroundColor: "purple",
                            border: "2px solid #000",
                            margin: "0 10px 0 0",
                            flex: 2,
                            height: "27px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <pre
                            style={{
                              color: "antiquewhite",
                              margin: "0 0 0 10px",
                            }}
                          >
                            View task details
                          </pre>
                        </Button>
                        <Button
                          className="w-5"
                          onClick={() => completeTaskIdentifier(index)}
                          style={{
                            width: "180px",
                            backgroundColor: "purple",
                            border: "2px solid #000",
                            margin: "0 10px 0 0",
                            flex: 2,
                            height: "27px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <pre
                            style={{
                              color: "antiquewhite",
                              margin: "0 0 0 10px",
                            }}
                          >
                            {task.done ? "Set as Undone" : "Mark as done"}
                          </pre>
                          <FontAwesomeIcon
                            style={{
                              color: "antiquewhite",
                              margin: "0 0 0 10px",
                              fontSize: "20px",
                            }}
                            icon={task.done ? null : faSquareCheck}
                          />
                        </Button>
                        <Button
                          className="w-5"
                          onClick={() => deleteTask(index)}
                          style={{
                            width: "120px",
                            backgroundColor: "purple",
                            border: "2px solid #000",
                            margin: "0 2px 0 0",
                            flex: 2,
                            height: "27px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <pre
                            style={{
                              color: "antiquewhite",
                              margin: "0 0 0 10px",
                            }}
                          >
                            Delete
                          </pre>
                          <FontAwesomeIcon
                            style={{
                              color: "antiquewhite",
                              margin: "0 0 0 15px",
                              fontSize: "20px",
                            }}
                            icon={faCircleXmark}
                          />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskInput;
