import React, { useState } from "react";
import GenderCheckBox from "./GenderCheckBox";
import { Link } from "react-router-dom";
import useSignUp from "../../Hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const handleChangeCheckBox = (gender) => {
    setInputs({ ...inputs, gender });
  };
  // !Hook For Sign Up:
  const { loading, signUpUser } = useSignUp();
  // ?handle Submit To Sign Up:
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpUser(inputs);
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full border border-sky-500 p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5 ">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Sign Up <span className="capitalize text-sky-500">ChatApp</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="label-text text-base text-gray-300">
                Full Name:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered w-full h-10 focus:outline-sky-500"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-gray-300 text-base">
                Username:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered w-full h-10 focus:outline-sky-500"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-gray-300 text-base">
                Password
              </span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered w-full h-10 focus:outline-sky-500"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-gray-300 text-base">
                Confirm Password:
              </span>
            </label>
            <input
              type="password"
              placeholder="Confirm your password"
              className="input input-bordered w-full h-10 focus:outline-sky-500"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          {/* Gender Components Will be here */}
          <GenderCheckBox
            onCheckBoxChange={handleChangeCheckBox}
            selectedGender={inputs.gender}
          />
          <Link
            to="/signin"
            className="text-sky-500 hover:underline text-sm mt-2"
          >
            Have An Account?
          </Link>
          <button
            disabled={
              loading ||
              inputs.password !== inputs.confirmPassword ||
              !inputs.gender ||
              !inputs.username ||
              !inputs.password ||
              !inputs.fullName
            }
            className="btn btn-primary btn-md btn-block uppercase mt-2 disabled:text-gray-200 disabled:bg-opacity-90"
          >
            {loading ? (
              <span className="loading loading-dots loading-md text-success"></span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
