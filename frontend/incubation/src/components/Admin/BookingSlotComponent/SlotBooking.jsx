import React, { useEffect, useReducer, useState, forwardRef } from "react";
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

const SlotBooking = () => {
  const [viewSlots, setViewSlots] = useState([]);
  const [slot, setSlot] = useState("");
  const [room, setRoom] = useState("");
  const [reducerValue, forceUpdate] = useReducer((x) => x + 1, 0);
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [company, setCompany] = useState(null);
  const [show, setShow] = useState([]);
  const [roomID, setRoomID] = useState(null);

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
  }, []);

  console.log("RoomID", roomID);
  console.log("SHOOWW", show);
  console.log("COMAPNY", company);

  const assignSlot = (id) => {
    axios.post(
      `http://127.0.0.1:8000/assign-slot/${roomID}/${company}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    setOpens(false);
    setCompany('')
    forceUpdate();


  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-left">Book SLots</h1>
        <button onClick={handleClickOpen}>Add Slot</button>
      </div>
      <div style={{ display: "flex", marginTop: "15px" }}>
        {viewSlots.map((view) =>
          view.is_booked === false ? (
            <Box
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
                  <button className="mx-3">view</button>

                  {view.is_booked === true ? (
                    <button>Reserved</button>
                  ) : (
                    <button>Available</button>
                  )}
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
                  name="company_id"
                  value={company}
                  onChange={handleChange}
                >
                  {show.map((see, id) => (
                    <MenuItem value={see.id}> {see.company_name} </MenuItem>
                  ))}
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
    </div>
  );
};

export default SlotBooking;
