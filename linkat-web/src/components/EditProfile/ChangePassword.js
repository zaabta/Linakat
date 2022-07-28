import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { updatePasswordAction } from "../../redux/actions/users";

const ChangePassword = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    currPassword: "",
    newPassword: "",
    newPasswordConfirmation: "",
  });

  const handleInputChange = (e) => {
    data[e.target.name] = e.target.value;
  };

  const handleOnChangePassword = async () => {
    await dispatch(updatePasswordAction(data))
      .then(() => console.log("yes"))
      .catch(() => console.log("no"));
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
        id="Current password"
        label="Current password"
        variant="standard"
        type={"password"}
        name={"currPassword"}
        helperText={`Enter password for authorization to change password`}
        onChange={handleInputChange}
      />
      <TextField
        id="New password"
        label="New password"
        variant="standard"
        type={"password"}
        name={"newPassword"}
        helperText={`Enter the new password here`}
        onChange={handleInputChange}
      />
      <TextField
        id="Password confirmation"
        label="Password confirmation"
        variant="standard"
        type={"password"}
        name={"newPasswordConfirmation"}
        helperText={`Enter the password confirmation here`}
        onChange={handleInputChange}
      />
      <Button
        sx={{
          width: "fit-content",
          ml: "2em",
        }}
        variant="contained"
        size="small"
        onClick={handleOnChangePassword}
      >
        change password
      </Button>
    </Container>
  );
};

export default ChangePassword;
