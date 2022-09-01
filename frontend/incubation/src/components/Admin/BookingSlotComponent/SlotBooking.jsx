import React, { useEffect, useReducer, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import axios from "axios";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

const SlotBooking = () => {
  const [viewSlots, setViewSlots] = useState([]);
  const [room, setRoom] = useState("");
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [company, setCompany] = useState(null);
  const [show, setShow] = useState([]);
  const [roomID, setRoomID] = useState(null);
  const [viewOpen, setViewOpen] = useState(false);
  const [detail, setDetail] = useState(null);
  const [list, setList] = useState([])

  const viewRooms = async () => {
    let slot = await axios.get("http://127.0.0.1:8000/view-slots");
    setViewSlots(slot.data);
  };
  console.log("HHHHHH", viewSlots);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addRoom = () => {
    let add = axios.post("http://127.0.0.1:8000/add-slot", {
      room: room,
    });
    console.log("submitted", add);
    setOpen(false);
    forceUpdate();
    setRoom("");
  };

  useEffect(() => {
    viewRooms();
  }, [reducerValue]);

  const handleClickOpens = (id) => {
    setOpens(true);
    setRoomID(id);
  };

  const handleCloses = () => {
    setOpens(false);
    setCompany("");
  };

  const handleChange = (event) => {
    setCompany(event.target.value);
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/listapproved").then((response) => {
      setShow(response.data);
    });
  }, [reducerValue]);

  const assignSlot = (id) => {
    axios.post(`http://127.0.0.1:8000/assign-slot/${roomID}/${company}`, {
      headers: {
        "Content-type": "application/json",
      },
    });
    setOpens(false);
    setCompany("");
    forceUpdate();
  };

  const openView = (id) => {
    axios
      .get(`http://127.0.0.1:8000/booking-details/${id}`)
      .then((response) => {
        setDetail(response.data);
      });
    setViewOpen(true);
  };

  const closeView = () => {
    setViewOpen(false);
  };

  useEffect(()=>{
    const newList = show.filter(data=>{return data.approved === true && data.allotted === false})
    setList(newList)

  },[show])
  


  console.log("RoomID", roomID);
  console.log("SHOOWW", show);
  console.log("COMAPNY", company);
  console.log("LIST", list);
  return (
    <div>
      <div className="flex justify-between  ">
        <div className="flex ">
          <CheckBoxOutlineBlankIcon
            sx={{ bgcolor: "#17fa23", color: "#17fa23", marginRight: 1 }}
          />{" "}
          <h1> Available</h1>
          <CheckBoxOutlineBlankIcon
            sx={{
              bgcolor: "yellow",
              color: "yellow",
              marginLeft: 2,
              marginRight: 1,
            }}
          />{" "}
          <h1> Reserved</h1>
        </div>
        <div >
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon onClick={handleClickOpen} />
          </Fab>
        </div>
      </div>

      <div style={{ display: "flex", marginTop: "15px", flexWrap: "wrap" }}>
        {viewSlots.map((view, id) =>
          view.is_booked === false ? (
            <Box
              key={id}
              onClick={() => handleClickOpens(view.id)}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 128,
                  height: 128,
                  bgcolor: "#17fa23",
                  cursor: "pointer",
                },
              }}
            >
              <Paper elevation={3}>Room:{view.room}</Paper>
            </Box>
          ) : (
            <Box
              key={id}
              sx={{
                display: "flex",
                flexWrap: "wrap",
                "& > :not(style)": {
                  m: 1,
                  width: 128,
                  height: 128,
                  bgcolor: "yellow",
                },
              }}
            >
              <Paper elevation={3}>
                Room:{view.room}
                <div>
                  <button
                    onClick={() => openView(view.booking)}
                    className="mx-3 mt-8 hover:border hover:bg-blue-500 hover:text-white hover:font-bold py-2 px-3 rounded"
                  >
                    view
                  </button>
                </div>
              </Paper>
            </Box>
          )
        )}
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Room</DialogTitle>
        <DialogContent>
          Enter room no.
          <TextField
            autoFocus
            margin="dense"
            id="number"
            name="room"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addRoom}>Add</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={opens}
        onClose={handleCloses}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Book slot"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Box sx={{ minWidth: 240 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Approved list
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={company}
                  onChange={handleChange}
                >
                  { list.map((see, id) => (
                    <MenuItem key={id} value={see.id}>
                      {" "}
                      {see.company_name}{" "}
                    </MenuItem>
                  )) }
                </Select>
              </FormControl>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloses}>Cancel</Button>
          <Button onClick={assignSlot} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={viewOpen}
        onClose={closeView}
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
          <Button onClick={closeView} autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SlotBooking;
