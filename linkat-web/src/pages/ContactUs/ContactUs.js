import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";
import {
  TextField,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { toggleNotf } from "../../redux/actions/notifications";
import { useDispatch } from "react-redux";
import axios from "axios";

const ContactUs = ({}) => {
  const dispatch = useDispatch();
  const [contactData, setContactData] = useState({
    first_name: "",
    last_name: "",
    message: "",
    tel: "",
    email: "",
  });
  const [ip, setIP] = useState("");
  const [localStorageIP, setLocalStorageIP] = useState(
    JSON.parse(window.localStorage.getItem("localStorageIP")) || null
  );

  const getIP = async () => {
    const res = await axios.get("https://geolocation-db.com/json/")
    .then(res => setIP(res.data.IPv4)
    ).catch(err=> console.log(err))
    
  };

  useEffect(() => {
    getIP();
    if (!localStorageIP) {
      window.localStorage.setItem("localStorageIP", JSON.stringify({
        ip: ip,
        count: 0
      }));
    }
  }, []);
  const handleOnChange = (e) => {
    contactData[e.target.name] = e.target.value;
  };
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      setLocalStorageIP(JSON.parse(window.localStorage.getItem("localStorageIP")));
      if (localStorageIP?.count >= 4) {
        dispatch(toggleNotf({ success: false, messages: "Email limit exceeded"}));
      }else{
      await emailjs
        .send(
          "service_h6mkufm",
          "template_2jmrx1g",
          contactData,
          "Xt39ofL1DUR6Bvyvl"
        )
        .then((res) => {
          console.log(res);
          dispatch(
            toggleNotf({ success: true, messages: "successfully sent it" })
          );
          setLocalStorageIP({
            ...localStorageIP,
            count: localStorageIP.count + 1
          })
          window.localStorage.setItem("localStorageIP", JSON.stringify(localStorageIP))
        })
        .catch((err) => {
          dispatch(
            toggleNotf({ success: false, messages: "failed to send it" })
          );
        });
      }
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        height: "100vh",
      }}
    >
      <Typography color="text.primary" variant="h2" component="h3">
        contact us
      </Typography>
      <Typography color="text.primary" variant="p">
        We'd love to hear from you!
      </Typography>
      <Grid
        sx={{
          m: "5em",
        }}
      >
        <Card
          style={{
            maxHeight: "100vh",
            maxWidth: 550,
            padding: "20px 5px 5px 5px",
            margin: "0 auto",
          }}
        >
          <CardContent>
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="first_name"
                    onChange={handleOnChange}
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                    name="last_name"
                    onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    placeholder="Enter email"
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                    name="email"
                    onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    placeholder="Enter phone number"
                    label="Phone"
                    aria-label="text"
                    variant="outlined"
                    fullWidth
                    required
                    name="tel"
                    onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Type your message here"
                    variant="outlined"
                    fullWidth
                    required
                    name="message"
                    onChange={handleOnChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={sendEmail}
                    sx={{
                      textTransform: "capitalize",
                    }}
                  >
                    Send
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Box>
  );
};

export default ContactUs;
