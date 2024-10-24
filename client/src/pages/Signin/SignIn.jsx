import React, { useState } from "react";
import { Link } from "react-router-dom";
import useSignInUser from "../../Hooks/useSignInUser";

const SignIn = () => {
  const [inputs, setInputs] = useState({ username: "", password: "" });
  // !Hooks For Sign In:
  const { loading, signInUser } = useSignInUser();
  // ?handle Submit To Sign In:
  const handleSubmit = async (e) => {
    e.preventDefault();
    await signInUser(inputs);
  };
  return (
    <div className="flex felx-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full border border-sky-500 p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5 ">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Login
          <span className="capitalize text-sky-500">chat app</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label">
              <span className="label-text text-base text-gray-300">
                Username:
              </span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered  w-full h-10 focus:outline-sky-500"
              value={inputs.username}
              onChange={(e) =>
                setInputs({ ...inputs, username: e.target.value })
              }
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-gray-300 text-base">
                Password:
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
          <Link
            to={"/signup"}
            className="text-sky-500 mt-2 hover:underline inline-block"
          >
            {"Don't"} have an Account?
          </Link>
          <button
            disabled={loading || inputs.username === "" || inputs.password === ""}
            className="btn btn-primary btn-block btn-md  uppercase mt-4 disabled:text-gray-200 disabled:bg-opacity-90"
          >
            {loading ? (
              <span className="loading loading-dots loading-md text-success"></span>
            ) : (
              "Sign In"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
