import axios from "axios";
import React, { useEffect, useState } from "react";

const ApprovedList = () => {
  const [show, setShow] = useState([]);
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/listapproved").then((response) => {
      setShow(response.data);
    });
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="text-left text-xl ml-3 bold">APPROVED LIST</h1>

      <table className="text-left w-full overflow-hidden border rounded-lg min-w-full divide-y divide-gray-200">
        <thead className="min-w-full  bg-gray-100 ">
          <tr className=" flex  divide-y divide-gray-200 ">
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5 ">
              Sl.no
            </th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5 ">
              Name
            </th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5 ">
              email
            </th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5 ">
              company
            </th>
          </tr>
        </thead>

        <tbody
          className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full divide-y divide-gray-200"
          style={{ height: "25vh" }}
        >
          {show &&
            show
              .filter((i) => i.approved === true)
              .map((data, index) => (
                <tr key={index} className="flex w-full">
                  <td className="text-left px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap w-1/5">
                    {index + 1}
                  </td>
                  <td className="text-left px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap w-1/5 ">
                    {data.fullname}
                  </td>
                  <td className="text-left px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap w-1/5 ">
                    {data.email}
                  </td>
                  <td className=" px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap w-1/5 ">
                    <button className="text-yellow-500 hover:text-yellow-700 px-5">
                      view
                    </button>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovedList;
