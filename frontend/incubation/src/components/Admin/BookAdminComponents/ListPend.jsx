import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";

const ListPend = () => {
  const [show, setShow] = useState([]);
  const [see, setSee] = useState([]);


  const {setPending} = useContext(AuthContext)

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/list")
      .then((response) => setShow(response.data));
      // setPending(see)
  }, [setPending,see]);



  const onSubmit = async (id) => {
    await axios.post(`http://127.0.0.1:8000/approved/${id}`).then((response)=>setSee(response.data))
    
    // forceUpdate();
   
  };

  const onDecline = async (id) => {
    await axios.post(`http://127.0.0.1:8000/declined/${id}`).then((response)=>setSee(response.data));

    // forceUpdate();
  };

  // useEffect(()=>{
  //     const newShow = show.filter(data =>{return data.approved === false && data.declined === false})
  //     console.log('NEWSHOW: ',newShow);
  //     setShow(newShow)
  // },[show])

  return (
    <div className="container mt-5">
      <h1 className="text-left text-xl ml-3 bold">PENDING LIST</h1>

      <table className="text-left w-full overflow-hidden border rounded-lg min-w-full divide-y divide-gray-200">
        <thead className="min-w-full  bg-gray-100 ">
          <tr className=" flex  divide-y divide-gray-200 ">
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5 ">
              Sl.no
            </th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5 ">
              User
            </th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5 ">
              email
            </th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5 ">
              company
            </th>
            <th className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase w-1/5 ">
              <div className="flex justify-between ">
                <div>Approve</div>
                <div>decline</div>
              </div>
            </th>
          </tr>
        </thead>

        <tbody
          className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full divide-y divide-gray-200"
          style={{ height: "25vh" }}
        >
          {show.map((data, index) => (
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
              <td className="  px-6 py-4 text-sm  font-medium text-gray whitespace-nowrap w-1/5 ">
                <div className="flex justify-between text-center">
                  <button
                    onClick={() => onSubmit(data.id)}
                    className="px-4 text-green-500 hover:text-green-700 curs"
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => onDecline(data.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Decline
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPend;
