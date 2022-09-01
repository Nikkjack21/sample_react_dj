import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Record = () => {
  const [list, setList] = useState([]);
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState([]);
  const [data, setNewData] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/all-list")
      .then((response) => setList(response.data));
  }, []);

  const handleClickOpen = (id) => {
    axios
      .get(`http://127.0.0.1:8000/booking-details/${id}`)
      .then((response) => {
        setDetail(response.data);
      });
    setOpen(true);
  };
  console.log("LIST: ", list);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const results = list.filter((data) => {
      return (
        data.approved === true &&
        data.declined === true &&
        data.allotted === true
      );
    });
    setNewData(results);
  }, [list]);




  console.log("DATA: ", data);

  return (
    <div className="container mt-5">
      <h1 className="text-left text-xl ml-3 bold mb-3">Records</h1>
      <div class="relative pt-1 mx-8 w-3/12">
  <div class="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
    
    <div style={{width: "35%"}} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"> Approved</div>
    <div style={{width: "35%"}} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500">Declined</div>
    <div style={{width: "35%"}} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500">On progress</div>
    <div style={{width: "35%"}} class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500">Booked</div>
  </div>
</div>

      <table className="text-left w-full overflow-hidden border rounded-lg min-w-full divide-y divide-gray-200">
        <thead className="min-w-full  bg-gray-100 ">
          <tr className=" flex  divide-y divide-gray-200 ">
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5 ">
              Sl.no
            </th>
            <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase w-1/5 ">
              Company name
            </th>
            <th className="px-6 py-3 text-center text-xs font-bold  text-gray-500 uppercase w-1/5 ">
              Details
            </th>
            <th className="px-6 py-3 text-xs font-bold  text-gray-500 uppercase w-1/5 ">
              Progress bar
            </th>
          </tr>
        </thead>

        <tbody
          className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll  w-full divide-y divide-gray-200"
          style={{ height: "40vh"  }}
        >
          {list.map((data, id) => (
            <tr key={id} className="flex w-full overflo">
              <td className="text-left px-6 py-4 text-sm font-medium overflow-x-auto text-gray-800 whitespace-nowrap w-1/5">
                {id + 1}
              </td>
              <td className="text-left px-6 py-4 text-sm font-medium overflow-x-auto scrollbar-hide  text-gray-800 whitespace-nowrap w-1/5 ">
                {data.company_name}
              </td>
              <td className="text-center px-6 py-4 text-sm font-medium overflow-x-auto  text-gray-800 whitespace-nowrap w-1/5 ">
                <Button
                  variant="outlined"
                  onClick={() => handleClickOpen(data.id)}
                >
                  view
                </Button>
              </td>
              <td className=" px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap w-2/6 ">
                <div className="relative pt-1 mx-5 w-full ">
                  {data.allotted === true ? (
                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
                      {" "}
                      <div
                        style={{width:'100%'}}
                        className="shadow-none flex flex-col text-center font-bold whitespace-nowrap text-white justify-center bg-green-500"
                      >
                      100%
                      </div>
                    </div>
                  ) : data.declined === true ? (
                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
                      <div
                        style={{ width: "100%", }}
                        className="shadow-none flex flex-col text-center font-bold whitespace-nowrap text-white justify-center bg-red-500"
                      >
                      100%
                      </div>
                    </div>
                  ) : data.approved === true ? (
                    <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
                      <div
                        style={{ width: "40%" }}
                        className="shadow-none flex flex-col text-center font-bold whitespace-nowrap text-white justify-center bg-sky-500"
                      >
                        40%
                      </div>
                      <div
                        style={{ width: "25%" }}
                        className="shadow-none flex flex-col text-center font-bold  whitespace-nowrap text-white justify-center bg-orange-500"
                      >
                        25%
                      </div>
                      <div
                        style={{ width: "45%" }}
                        className="shadow-none flex flex-col text-center font-bold whitespace-nowrap text-white justify-center bg-gray-100"
                      >
                      
                      </div>
                    </div>
                  ) : data.pending === true ? (
                    <div class="overflow-hidden h-4 mb-4 text-xs flex rounded bg-emerald-200">
                      {" "}
                      <div
                        style={{ width: "100%" }}
                        class="shadow-none flex flex-col text-center font-bold whitespace-nowrap text-white justify-center bg-emerald-200"
                      >
                        Pending
                      </div>
                    </div>
                  ) : null}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Company Details"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {detail && (
              <h1>
                {" "}
                Company:{" "}
                <span className="font-bold">{detail.company_name}</span>
              </h1>
            )}
            <hr />
            {detail && (
              <h1>
                {" "}
                Name: <span className="font-bold">{detail.fullname}</span>
              </h1>
            )}
            <hr />
            {detail && (
              <h1>
                {" "}
                Email: <span className="font-bold">{detail.email}</span>
              </h1>
            )}
            <hr />
            {detail && (
              <h1>
                {" "}
                City: <span className="font-bold">{detail.city}</span>
              </h1>
            )}
            <hr />
            {detail && (
              <h1>
                {" "}
                State: <span className="font-bold">{detail.state}</span>
              </h1>
            )}
            <hr />
            {detail && (
              <h1>
                {" "}
                Address: <span className="font-bold">{detail.address}</span>
              </h1>
            )}
            <hr />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Record;
