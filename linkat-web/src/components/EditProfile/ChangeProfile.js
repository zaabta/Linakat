import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateprofileAction } from "../../redux/actions/users";

const ChangeProfile = () => {
  const user = useSelector((state) => state?.auth?.data?.user);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    bio: "",
    nickname: "",
  });

  const handleOnChangeProfile = async () => {
    await dispatch(updateprofileAction(data))
      .then(() => console.log("yes"))
      .catch(console.log("no"));
  };

  const handleOnChangeInput = (e) => {
    data[e.target.name] = e.target.value
  }

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: "4em",
      }}
    >
      <TextField
        id="standard-basic"
        label="Nickname"
        variant="standard"
        helperText={`Enter your nickname here`}
        defaultValue={user.usersprofile.nickname}
        name="nickname"
        onChange={handleOnChangeInput}
      />
      <TextField
        multiline
        id="standard-basic"
        label="Bio"
        variant="standard"
        helperText={`Enter your bio here`}
        defaultValue={user.usersprofile.bio}
        name="bio"
        onChange={handleOnChangeInput}
      />
      <Button
        sx={{
          width: "fit-content",
          ml: "2em",
        }}
        variant="contained"
        size="small"
        onClick={handleOnChangeProfile}
      >
        update
      </Button>
    </Container>
  );
};

export default ChangeProfile;
