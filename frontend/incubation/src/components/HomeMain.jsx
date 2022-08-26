import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Home from "../assets/company.jpg";
import AuthContext from "../context/AuthContext";

const HomeMain = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [save, setSave] = useState([]);

  useEffect(() => {
    if (user && user !== null) {
      console.log("Heyyyyyyy", user);
      setSave(user);
      navigate("/");
    }
  }, [user, navigate, save]);
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
            </div>
          </nav>
        </header>
        <div className="container border-4 border-white rounded-lg mx-auto w-4/5 relative z-10 flex items-center py-16 my-24 md:my-32">
          <div className="w-full flex flex-col items-center justify-between relative z-10">
            <p className="flex flex-col items-center font-extrabold text-6xl text-center md:text-8xl text-white">
            Make Your Reservation
            </p>
            <p className="flex flex-col max-w-lg text-center  items-center font-extrabold text-lg mt-6 text-white">
              We aim to provide au courant infrastructure and support facilities
              to IT/ITeS and electronics companies that would help them function
              from an unparalleled, self-reliant location.
            </p>
            <Link to="/book">
              <button
               
                className="block bg-red-600 hover:bg-green-600 py-3 px-4 text-lg text-white font-bold uppercase mt-10"
              >
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
