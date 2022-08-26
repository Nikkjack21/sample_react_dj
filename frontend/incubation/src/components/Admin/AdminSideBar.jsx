import React from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import BookingHome from "../../pages/Booking Admin/BookingHome";
import AddUserComp from "../AddUserComp";

const AdminSideBar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen top-0 bg-sky-400 sticky p-4   flex flex-col">
      <AddUserComp />
      <div
        className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
      >
        <p
          onClick={() => {
            navigate("/booking-list");
          }}
        >
          {" "}
          Booking List
        </p>
      </div>
    </div>
  );
};

export default AdminSideBar;
