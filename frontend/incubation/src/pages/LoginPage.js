import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import loginImg from "../assets/login.jpg";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-gray-100 flex flex-col justify-center">
        <form
          onSubmit={loginUser}
          className="max-w-[400px] w-full mx-auto bg-white p-4"
        >
          <h2 className="text-4xl font-bold text-center py-4"> Login</h2>
          <div className="flex flex-col py-2">
            <label className="text-left"> Username: </label>
            <input name="username" className="border py-2" type="text" />
          </div>

          <div className="flex flex-col py-2">
            <label className="text-left"> Password: </label>
            <input name="password" className="border py-2" type="Password" />
          </div>
          <button
            className="w-full my-5 py-2 bg-sky-400 text-white text-xl hover:bg-indigo-400
      cursor-pointer "
          >
            Signin
          </button>
          <p>
            {" "}
            Don't have an account?{" "}
            <NavLink to="/signup">
              <span className=" py-2 border-stone-100  text-l hover:text-red-500 cursor-pointer underline">
                Signup{" "}
              </span>{" "}
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
