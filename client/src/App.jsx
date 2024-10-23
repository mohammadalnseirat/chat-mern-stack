import React from "react";
import SignIn from "./pages/Signin/SignIn";
import SignUp from "./pages/Signup/SignUp";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className="p-4 h-screen flex items-center justify-center">

      {/* <SignIn/> */}
      {/* <SignUp/> */}
      <Home/>
    </div>
  );
};

export default App;
