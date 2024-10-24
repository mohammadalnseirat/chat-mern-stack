import React from "react";
import SignIn from "./pages/Signin/SignIn";
import SignUp from "./pages/Signup/SignUp";
import Home from "./pages/Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./Context/AuthContext";

const App = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <Routes>
        <Route
          path="/"
          element={authUser ? <Home /> : <Navigate to="/signin" />}
        />
        <Route
          path="/signin"
          element={authUser ? <Navigate to="/" /> : <SignIn />}
        />
        <Route
          path="/signup"
          element={authUser ? <Navigate to="/" /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
