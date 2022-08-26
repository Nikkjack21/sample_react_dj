import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";

const BookingList = () => {
  const [show, setShow] = useState([]);

  const {pending}  = useContext(AuthContext)

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/list")
      .then((response) => setShow(response.data));
      
  }, [pending]);



  return (
    <div className="flex flex-col">
      <h1 className="text-left text-xl ml-3 bold">NEW APPLICATION LIST</h1>
      <div className="overflow-x-auto">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="overflow-hidden border rounded-lg">
            <table className="min-w-full divide-y divide-gray-200  ">
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
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    USer
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                  >
                    Email
                  </th>
                  <th
                    scope="col"
                    className=" text-left px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                  >
                    Company
                  </th>
                  <th
                    scope="col"
                    className="text-left px-6 py-3 text-xs font-bold  text-gray-500 uppercase "
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {show.reverse().map((data, id) =>
                  id <= 2 ? (
                    <tr key={id}>
                      <td className=" text-left px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                        {id + 1}
                      </td>
                      <td className="text-left px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {data.fullname}
                      </td>
                      <td className="text-left px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                        {data.email}
                      </td>
                      <td className="px-6 text-left py-4 text-sm font-medium whitespace-nowrap">
                        <a
                          className="text-yellow-500 hover:text-yellow-700"
                          href="#/"
                        >
                          View
                        </a>
                      </td>
                      <td className="text-left px-6 py-4 text-sm font-medium  whitespace-nowrap">
{
  data.pending ?
                (        <a
                          className="text-red-500 hover:text-red-700"
                          href="#/"
                        >
                          Pending
                        </a>
) : null


}
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingList;
