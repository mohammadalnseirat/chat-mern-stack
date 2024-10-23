import React from "react";

const SignIn = () => {
  return (
    <div className="flex felx-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full border border-sky-500 p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5 ">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Login
          <span className="capitalize text-sky-500">chat app</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="label-text text-base text-gray-300">Username:</span>
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              className="input input-bordered  w-full h-10 focus:outline-sky-500"
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
            />
          </div>
          <a href="#" className="text-sky-500 mt-2 inline-block">
            {"Don't"} have an Account?
          </a>
          <button className="btn btn-primary btn-block btn-sm uppercase mt-4">
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
