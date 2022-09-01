import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProgressViewDetails = () => {
  const [open, setOpen] = useState(false);
  const [detail, setDetail] = useState();
  const { id } = useParams();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        view
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
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
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProgressViewDetails;
