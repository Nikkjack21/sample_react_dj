import React, { useContext } from "react";
import RegIMg from "../assets/registration.jpg";
import {  NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const SignupPage = () => {
const {Register} = useContext(AuthContext)

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img className="w-full h-full object-cover" src={RegIMg} alt="" />
        </div>
        <div className="bg-gray-100 flex flex-col justify-center">
          <form onSubmit={Register}
          className="max-w-[400px] w-full mx-auto bg-white p-4">
            <h2 className="text-4xl font-bold text-center py-4">
              {" "}
              Registration
            </h2>
            <div className="flex flex-col py-2">
              <label> Firstname: </label>
              <input name="first_name" className="border py-2" type="text" />
            </div>
            <div className="flex flex-col py-2">
              <label> Lastname: </label>
              <input name="last_name" className="border py-2" type="text" />
            </div>
            <div className="flex flex-col py-2">
              <label> Email: </label>
              <input name="email" className="border py-2" type="email" />
            </div>

            <div className="flex flex-col py-2">
              <label> Username: </label>
              <input name="username" className="border py-2" type="text" />
            </div>

            <div className="flex flex-col py-2">
              <label> Password: </label>
              <input name="password" className="border py-2" type="Password" />
            </div>

            <button
              className="w-full my-5 py-2 bg-sky-400 text-white text-xl hover:bg-indigo-400
        cursor-pointer "
            >
              Sign up
            </button>
            <p>
              {" "}
              Already have an account?{" "}
              <NavLink to='/login'>
                <span className=" py-2 border-stone-100  text-l hover:text-red-500 cursor-pointer underline">
                  Login{" "}
                </span>{" "}
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
