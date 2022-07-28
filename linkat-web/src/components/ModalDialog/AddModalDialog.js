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
import { addNewLinkAction } from "../../redux/actions/links";

const AddModalDialog = ({ open, handleOnClose }) => {
  const dispatch = useDispatch();
  const linkTypes = useSelector((state) => state?.links.linkTypes);
  const [link, setLink] = useState({
    linkTypeId: "",
    url: "",
  });
  const handleChange = (event) => {
    link[event.target.name] = event.target.value;
    console.log(link);
  };

  const addNewLink = async () => {
    await dispatch(addNewLinkAction(link))
      .then(() => console.log("ADD_new_link", "sucess"))
      .catch((err) => console.log("ADD_new_link", err));
      handleOnClose(false);
  };

  return (
    <Dialog open={open} onClose={() => handleOnClose(false)}>
      <DialogTitle>Add Link</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To Add new Link, please enter your link address here. it will add it
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
                ? linkTypes.find((linkType) => linkType.id === link.linkTypeId)
                    ?.type
                : null
            }
            onChange={handleChange}
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
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            setLink({
              linkTypeId: "",
              url: "",
            });
            handleOnClose(false);
          }}
        >
          Cancel
        </Button>
        <Button onClick={addNewLink}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddModalDialog;
