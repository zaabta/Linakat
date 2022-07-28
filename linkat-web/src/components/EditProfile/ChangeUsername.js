import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { updateUsernameAction } from "../../redux/actions/users";

const ChangeUsername = ({}) => {
  const user = useSelector((state) => state?.auth?.data?.user);
  const [data, setData] = useState({newUsername:"", password:""})
  const dispatch = useDispatch();

  const handleOnChangeInput = (e) => {
    data[e.target.name] = e.target.value;
  }

  const handleOnChangeUsername = async () => {
    await dispatch(updateUsernameAction(data))
      .then(() => {
        console.log("yes");
      })
      .catch(() => {
        console.log("no");
      });
  };

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: "4em",
      }}
    >
      <TextField
        id="Username"
        label="Username"
        variant="standard"
        helperText={`To change the current username.`}
        defaultValue={user?.username}
        required={false}
        name="newUsername"
        onChange={handleOnChangeInput}
      />
      <TextField
        id="Re-Enter password"
        label="Re-Enter password"
        variant="standard"
        helperText={`Enter password for authorization to change username`}
        required={false}
        name="password"
        onChange={handleOnChangeInput}
      />
      <Button
        sx={{
          width: "fit-content",
          ml: "2em",
        }}
        variant="contained"
        size="small"
        onClick={handleOnChangeUsername} 
      >
        submit
      </Button>
    </Container>
  );
};

export default ChangeUsername;
