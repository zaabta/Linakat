import React,{ useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import UnsubscribeIcon from "@mui/icons-material/Unsubscribe";
import { useDispatch } from "react-redux";
import { subscribeAction } from "../../redux/actions/subscribers";

import "./Footer.css";

const Copyright = () => {
  return (
    <Typography sx={{ mt: 1, fontSize:".8em"}} variant="body2" color="text.secondary">
      {" 2021 Copyright © "}
      Company, Inc. All rights reserved {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = ({ darlMode }) => {
  const dispatch = useDispatch();

  const [subscribeData, setSubscribeData] = useState({
    email: "", 
  });

  const handleInputChange = (e) => {
    subscribeData[e.target.name] = e.target.value;
  };
  
  const handleSubscribe = async (e) => {
    e.preventDefault();
    await dispatch(subscribeAction(subscribeData))
      .then(() => console.log("subscribe: ", "sucess"))
      .catch((err) => console.error("subscribe:", err));
  };


  return (
    <div className="footer">
      <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row",  },
        minHeight: "20vh",
        width: "100%",
        justifyContent: "center",
        borderRadius: 1,
        p: 1,
        color: "text.primary",
        bgcolor: "background.default",
        borderTop: 1,
        flexGrow: 1, 
        borderColor: "text.primary",
      }}
    >
      <Container
        component="div"
        sx={{ mt: 2, mb: 2, display: "flex", flexDirection: "column" }}
        maxWidth="sm"
      >
        <Typography sx={{ fontSize:"3em", fontFamily:"unset" , fontWeight:"4em"}} variant="caption" gutterBottom>
          Linkat
        </Typography>
      </Container>

      <Container
        component="div"
        sx={{ mt: 1, mb: 1, display: "flex", flexDirection: "column" }}
        maxWidth="sm"
      >
        <Typography sx={{fontSize: "1.5em", fontWeight: "2em"}} variant="caption" gutterBottom>
          Be the first to see the news
        </Typography>
        <Typography  variant="caption" sx={{size: "1em"}} gutterBottom>
            Monthly disgest of whats new and exciting from us
        </Typography>

        <Container
          component="main"
          sx={{ mt: 1, ml: -3, mb: 1, display: "flex", flexDirection: "row" }}
          maxWidth="sm"
        >
          <TextField
            variant="outlined"
            placeholder="Ex: ada@gamil.com"
            id="demo-helper-text-aligned"
            label="Email"
            size="large"
            name="email"
            onChange={handleInputChange}
          />
          <Button
            variant="solid"
            color="neutral"
            size="md"
            startIcon={<UnsubscribeIcon />}
            onClick={handleSubscribe}
          >
            Subscribe
          </Button>
        </Container>
        <Copyright />
      </Container>
    </Box>
    </div>
  );
};

export default Footer;
