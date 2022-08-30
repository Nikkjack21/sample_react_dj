import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";


const BookingList = () => {
  const [show, setShow] = useState([]);
  const [details, setDetails] = useState([]);

  const { pending } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/list")
      .then((response) => setShow(response.data));
  }, [pending]);

  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  const handleOpen = (id) => {
      axios
        .get(`http://127.0.0.1:8000/booking-details/${id}`)
        .then((response) => setDetails(response.data));
        setOpen(true);
      };
      console.log('DETAILS: ', details);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    height: 400,
    
  };

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
                        <button
                          type="submit"
                          onClick={() => handleOpen(data.id)}
                          className="text-yellow-500 hover:text-yellow-700"
                        >
                          view
                        </button>
                      </td>
                      <td className="text-left px-6 py-4 text-sm font-medium  whitespace-nowrap">
                        {data.pending ? (
                          <p className="text-red-500 hover:text-red-700">
                            Pending
                          </p>
                        ) : null}
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <h1 className="text-center text-4xl "> Company Details</h1>
            <hr className="mb-3"/>
            <h2 >Company: <span> {details.company_name}</span>   </h2>
            
            <hr/>
            <h2>User: {details.fullname}</h2>
            <hr/>

            <h2>Phone: {details.phone}</h2>
            <hr/>

            <h2>Email: {details.email}</h2>            <hr/>

            <h2>Address: {details.address}</h2>
            <hr/>
           
            <hr/>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default BookingList;
