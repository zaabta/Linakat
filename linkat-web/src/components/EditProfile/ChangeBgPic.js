import React,{ useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch, useSelector } from "react-redux";
import { updateBgPicAction } from "../../redux/actions/users";
import FileUploadIcon from "@mui/icons-material/FileUpload";

const ChangeBgPic = () => {
  const user = useSelector((state) => state?.auth?.data?.user);
  console.log(user)
  const [open, setOpen] = useState(false);
  const [userPhoto, setUserPhoto] = useState(null);
  const dispatch = useDispatch();

  const handelChange = (e) => {
    setUserPhoto(e.target.files[0]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = async () => {
    const formData = new FormData();
    formData.append("file", userPhoto);
    try {
      dispatch(updateBgPicAction(formData));
      setOpen(false);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container sx={{
      position: "absolute",
      top: "50%",
      left: "60%",
      transform: "translate(-50%, -50%)",
      position:"relative",
    }}>
      <img style={{
      }} src={user?.usersprofile?.bgPic}  />
      <Button
        sx={{
          width: "fit-content",
          p:".5em 1em",
          color: "text.primary",
          bgcolor: "background.default",
          fontSize: ".8em",
          textTransform:"capitalize",
          fontWeight:"2rem",
          m: "0 0 0 .5em"
        }}
        variant="contained"
        endIcon={<FileUploadIcon />}
        onClick={handleClickOpen}
      >
        upload Image
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update background Profile Picture</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="todo"
            type="file"
            fullWidth
            variant="standard"
            onChange={handelChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Save photo</Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ChangeBgPic;
