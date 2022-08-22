import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import Home from "../assets/HomeIMG.jpg";

const HomePage = () => {
  const { user, logOut } = useContext(AuthContext);



  return (
    <div>
      <div className="bg-indigo-900 relative overflow-hidden h-screen">
        <img
          src={Home}
          className="absolute h-full w-full object-cover"
          alt=""
        />
        <div className="inset-0 bg-black opacity-25 absolute"></div>
        <header className="absolute top-0 left-0 right-0 z-20">
          <nav className="container mx-auto px-6 md:px-12 py-4">
            <div className="md:flex justify-center items-center">
              <div className="flex justify-between items-center">
                <div className="md:hidden">
                  <button className="text-white focus:outline-none">
                    <svg
                      className="h-12 w-12"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    ></svg>
                  </button>
                </div>
              </div>
              <div className="hidden md:flex items-center ">
                <div className="flex text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                  <p className="">Home</p>
                </div>
                  <p className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300"> Welcome, {user.first_name} </p>
                <div onClick={logOut}
                 className="text-lg uppercase mx-3 text-white cursor-pointer hover:text-gray-300">
                  Logout
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 my-24 md:my-32">
          <div className="w-full flex flex-col items-center justify-between relative z-10">
            <p className="flex flex-col items-center font-extrabold text-6xl text-center md:text-8xl text-white">
              Planet need you
            </p>
            <p className="flex flex-col max-w-lg text-center items-center font-extrabold text-lg mt-6 text-white">
              The first European to set eyes on the great river was a Spanish
              explorer, called De Soto, who came across the mouth of the river
              in 1541; yet it was not until over a century later that the
              Mississippi river began to take a significant place in the history
              of North America.
            </p>
            <a
              href="/#"
              className="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10"
            >
              Plant a tree
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
