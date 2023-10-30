import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Form from "react-bootstrap/Form";

function ClockCount() {
  const [displayData, setDisplayData] = useState({
    displayFullDate: "",
    hours: "",
    minutes: "",
    seconds: "",
    session: "",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const presentDate = new Date();
      const displayMonth = presentDate.getMonth() + 1;
      const displayDate = presentDate.getDate();
      const displayYear = presentDate.getFullYear();
      const hours = presentDate.getHours().toString().padStart(2, "0");
      const minutes = presentDate.getMinutes().toString().padStart(2, "0");
      const seconds = presentDate.getSeconds().toString().padStart(2, "0");
      const session = hours >= 12 ? "PM" : "AM";
      const newDisplayFullDate = ` ${displayDate}/${displayMonth}/${displayYear}`;

      setDisplayData({
        displayFullDate: newDisplayFullDate,
        hours,
        minutes,
        seconds,
        session,
      });

      setDate(presentDate);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const { displayFullDate, hours, minutes, seconds, session } = displayData;

  const [date, setDate] = useState(new Date());

  return (
    <div
      className="container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="justify-content-center">
        <Form
          style={{
            width: "180px",
            border: "2px solid #000",
            padding: "30px",
            borderRadius: "15px",
            backgroundColor: "greenyellow",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            fontFamily: "Sometype Mono, monospace",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          <div className="container">
            <span>{displayFullDate}</span>
          </div>
          <div className="container">
            <span id="hours">{hours}</span>
            <span>:</span>
            <span id="minute">{minutes}</span>
            <span>:</span>
            <span id="seconds">{seconds}</span>

            <span>{session}</span>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default ClockCount;
