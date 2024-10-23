import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full border border-sky-500 p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5 ">
        <h1 className="text-3xl font-semibold text-center text-gray-200">
          Sign Up <span className="capitalize text-sky-500">ChatApp</span>
        </h1>
        <form>
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
            />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-gray-300 text-base">
                Username:
              </span>
            </label>
            <input type="text" placeholder="Enter your username" className="input input-bordered w-full h-10 focus:outline-sky-500" />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-gray-300 text-base">Password</span>
            </label>
            <input type="password" placeholder="Enter your password" className="input input-bordered w-full h-10 focus:outline-sky-500" />
          </div>
          <div>
            <label className="label">
              <span className="label-text text-gray-300 text-base">Confirm Password:</span>
            </label>
            <input type="passsword" placeholder="Confirm your password" className="input input-bordered w-full h-10 focus:outline-sky-500" />
          </div>
          {/* Gender Components Will be here */}
          <GenderCheckBox/>
          <a href="#" className="text-sky-500 text-sm mt-2">
            Have An Account?
          </a>
          <button className="btn btn-primary btn-sm btn-block uppercase mt-2">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
