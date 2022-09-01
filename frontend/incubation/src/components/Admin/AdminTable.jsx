import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import TestDrawer from "./TestDrawer";
import AddUserComp from "../AddUserComp";
const AdminTable = () => {
  const [datas, setData] = useState([]);
  const navigate = useNavigate();



  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all")
      .then((response) => setData(response.data));
  }, []);

  const onSubmit = (id) => {
    confirmAlert({
      title: "Are you sure to do this.",
      message: "press confirm to delete",
      buttons: [
        {
          label: "Confirm",
          onClick: () =>
            axios
              .post(`http://127.0.0.1:8000/delete/${id}`)
              .then(() => {
                const newData = datas.filter((value) => {
                  return value.id !== id;
                });
                setData(newData);
              })
              .catch(() => {
                alert("Something went wrong");
              }),
        },
        {
          label: "Cancel",
        },
      ],
    });
  };


  return (
    <div>
      <TestDrawer>
        <div className="flex justify-around ">
          <h1 className="text-left text-xl ml-3 bold mb-3">Manage Users</h1>
          <div className="w-[40rem] "></div>
          <h1 className="  text-xl ml-3 bold mb-3">
            <AddUserComp />
          </h1>
        </div>

        <div className="flex-grow p-4 bg-gray-100">
          <div>
            <div className="flex flex-col">
              <div className="overflow-x-auto">
                <div className="p-1.5 w-full inline-block align-middle">
                  <div className="overflow-hidden border rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                          >
                            ID
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Firstname
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Lastname
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Username
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase "
                          >
                            Email
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                          >
                            Edit
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                          >
                            Delete
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y bg-gray-200 divide-gray-200">
                        {datas.map((data, id) => (
                          <tr key={id}>
                            <td className="px-6 py-4 text-sm font-medium text-left text-gray-800 whitespace-nowrap">
                              {id + 1}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {data.first_name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {data.last_name}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {data.username}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                              {data.email}
                            </td>

                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <button
                                onClick={() =>
                                  navigate(`/userupdate/${data.id}`)
                                }
                                className="text-green-500 hover:text-green-700"
                              >
                                Edit
                              </button>
                            </td>
                            <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                              <button
                                onClick={() => onSubmit(data.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TestDrawer>
    </div>
  );
};

export default AdminTable;
