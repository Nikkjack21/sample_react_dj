import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import loginImg from "../assets/login.jpg";
import AuthContext from "../context/AuthContext";


const LoginPage = () => {
  const navigate = useNavigate()
const {user, loginUser,err } = useContext(AuthContext);




useEffect(()=>{
  if (user){
    navigate('/')
  }else{
    navigate('/login')
  }
},[user, navigate])




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
          {/* <div className="text-center text-red-600">{err}</div> */}
{ err ?

          (<div id="alert-2" className="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200" role="alert">
  <span className="sr-only">Info</span>
  <div className="ml-3 text-sm font-medium text-red-700 dark:text-red-800">
{err}
  </div>
  <button  type="button" className="ml-auto -mx-1.5 -my-1.5 bg-red-100 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-red-200 dark:text-red-600 dark:hover:bg-red-300" data-dismiss-target="#alert-2" aria-label="Close">
    <span className="sr-only">Close</span>
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>

</div>) : null }

          <div className="flex flex-col py-2">
            <label className="text-left"> Username: </label>
            <input 
             name="username" className="border py-2" type="text" />
               
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
