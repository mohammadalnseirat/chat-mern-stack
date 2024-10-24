import React, { useState } from "react";
import { useAuthContext } from "../Context/AuthContext";
import toast from "react-hot-toast";

const useSignInUser = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const signInUser = async ({ username, password }) => {
    const success = handleInputsError({ username, password });
    if (!success) return;
    setLoading(true);
    try {
      const res = await fetch("/api/v1/auth/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      //? set the user in local storage:
      localStorage.setItem("chat-user-auth", JSON.stringify(data));
      //? Update the context:
      toast.success('User signed in successfully!');
      setAuthUser(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { signInUser, loading };
};

export default useSignInUser;

const handleInputsError = ({ username, password }) => {
  if (!username || !password) {
    toast.error("All fields are required");
    return false;
  }
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
  if (!passwordRegex.test(password)) {
    toast.error(
      "Password must be at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character"
    );
    return false;
  }
  return true;
};
