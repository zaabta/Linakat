import React, { useState } from "react";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useSelector, useDispatch } from "react-redux";
import { updateProfilePicAction } from "../../redux/actions/users";

const ChangeProfilePic = () => {
  const user = useSelector((state) => state?.auth?.data?.user);
  console.log(user);
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
      dispatch(updateProfilePicAction(formData));
      setOpen(false);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        ml:"2em"
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          margin:"0 auto"
        }}
      >
        <Avatar
          src={user && user?.usersprofile?.profilePic}
          sx={{ width: "10em", height: "10em", mb: 3 }}
        />
        <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          margin:"auto 0"
        }}
      >
        
        <Typography
          id="username"
          variant="caption"
          sx={{
            size: "2em",
            fontSize: "1em",
            width: "fit-content",
            m: "0 1em"
          }}
        >
          {user?.username}
        </Typography>
        <Button
        sx={{
          width: "fit-content",
          p:".5em 1em",
          color: "text.primary",
          bgcolor: "background.default",
          fontSize: ".6em",
          textTransform:"capitalize",
          fontWeight:"2rem",
          m: "0 0"
        }}
        variant="contained"
        endIcon={<FileUploadIcon />}
        onClick={handleClickOpen}
      >
        upload Image
      </Button>
      </Container>
      </Container>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Profile Picture</DialogTitle>
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

export default ChangeProfilePic;
