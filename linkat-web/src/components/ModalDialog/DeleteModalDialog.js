import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { deleteLinkAction } from "../../redux/actions/links";

const DeleteModalDialog = ({ open, handleClose, linkId, handleCloseMenu }) => {
  const dispatch = useDispatch();
  
  const handleOnDeletLink = async (data) => {
    await dispatch(deleteLinkAction(data))
      .then(() => {
        console.log("deleteLinkAction", "success");
        handleClose();
        handleCloseMenu();
      })
      .catch((err) => {
        console.error("deleteLinkAction", err);
        handleClose();
        handleCloseMenu();
      });
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>DELET Link</DialogTitle>
      <DialogContent>
        <DialogContentText>
          If you are sure To delete this Link, please press delete.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
        sx={{
          ":hover": {
            color: "#4993BC",
          },
        }} 
        onClick={() => {
          handleCloseMenu()
          handleClose()
        }}>
          Cancel
        </Button>
        <Button 
        sx={{
        ":hover": {
          color: "red",
        },
        }}
        onClick={() => handleOnDeletLink({ id: linkId })}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteModalDialog;
