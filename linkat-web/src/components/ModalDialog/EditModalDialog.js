import React, { useState } from "react";
import Button from "@mui/material/Button";
import {
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { editLinkAction } from "../../redux/actions/links";

const EditModalDialog = ({ open, handleClose, linkId, handleCloseMenu }) => {
  const dispatch = useDispatch();
  const linkTypes = useSelector((state) => state?.links.linkTypes);
  const [linkData, ] = useState({
    url: "",
    linkTypeId: "",
  });
  const handleInputChange = (e) => {
    linkData[e.target.name] = e.target.value;
  };
  const handleOnEditLink = async (data) => {
    await dispatch(editLinkAction(data))
      .then((res) => {
        console.log("editLinkAction", "success");
        handleClose();
        handleCloseMenu();
      })
      .catch((err) => {
        console.error("editLinkAction", err);
        handleClose();
        handleCloseMenu();
      });
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Edit Link</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To Edit this Link, please enter your link address here. it will update
          automatically.
        </DialogContentText>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Link type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="link Types"
            name="linkTypeId"
            defaultValue={""}
            value={
              linkTypes
                ? linkTypes?.find((linkType) => linkType.id === linkData.linkTypeId)
                    ?.type
                : null
            }
            onChange={handleInputChange}
          >
            {linkTypes?.map((linkType, index) => (
              <MenuItem key={index} value={linkType?.id}>
                {linkType?.type}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="your Link"
          type="text"
          fullWidth
          variant="standard"
          name="url"
          onChange={handleInputChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          sx={{
            ":hover": {
              color: "Red",
            },
          }}
          onClick={() => {
            handleClose();
            handleCloseMenu();
          }}
        >
          Cancel
        </Button>
        <Button
          sx={{
            ":hover": {
              color: "#4993BC",
            },
          }}
          onClick={() => handleOnEditLink({ ...linkData, id: linkId })}
        >
          Edit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditModalDialog;
