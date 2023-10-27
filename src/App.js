import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import FormSection from "./form";
import NameInput from "./nameinput";
import TaskInput from "./taskdetails";

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
    </div>
  );
}

export default App;
