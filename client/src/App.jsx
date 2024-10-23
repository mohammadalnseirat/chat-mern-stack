import React from "react";
import SignIn from "./pages/Signin/SignIn";
import SignUp from "./pages/Signup/SignUp";

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">

      {/* <SignIn/> */}
      <SignUp/>
    </div>
  );
};

export default App;
