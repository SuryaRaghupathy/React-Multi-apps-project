import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import FormSection from "./form";
import NameInput from "./nameinput";
import TaskInput from "./taskdetails";
import ClockCount from "./clocktimer";

function App() {
  const [loginSuccess, setLoginSuccess] = React.useState(false);

  const handleLoginSuccess = (success) => {
    setLoginSuccess(success);
  };

  return (
    <div>
      {/* //   {loginSuccess ? ( */}
      {/* //     <NameInput />
    //   ) : (
    //     <FormSection onLoginSuccess={handleLoginSuccess} />
    //   )} */}
      <TaskInput />
      {/* <ClockCount /> */}
    </div>
  );
}

export default App;
