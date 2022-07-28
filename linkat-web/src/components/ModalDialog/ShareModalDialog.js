import React, { useState } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  Typography,
  Tab,
  Box,
  Button,
} from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useDispatch, useSelector } from "react-redux";
import { toggleNotf } from "../../redux/actions/notifications";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import {
  createQRAction,
  createQRForLinksAction,
} from "../../redux/actions/qrcodes";

const ShareModalDialog = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const QR = useSelector((state) => state.qrcodes.QR);
  const QRLinks = useSelector((state) => state.qrcodes.QRLinks);
  const links = useSelector((state) => state?.links?.links);

  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [linksId, setLinksId] = useState([]);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChangeLinksId = (event) => {
    const {
      target: { value },
    } = event;
    setLinksId(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const createQRCode = async () => {
    await dispatch(createQRAction())
      .then(() => console.log("createQRCode", "sucess"))
      .catch((err) => console.error("ERROR-->", err));
  };

  const createQRCodeForLinks = async (arr) => {
    await dispatch(createQRForLinksAction({ links: arr }))
      .then(() => console.log("createQRCode", "sucess"))
      .catch((err) => console.error("ERROR-->", err));
  };


  const downloadURI = (uri, name) => {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  const getLinksType = (ids) => {
    const result = []; 
    for(var i = 0; i < ids.length; i++)
      result.push(links?.find(link => link.id === ids[i])?.linktype?.type)
    return result  
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Share profile</DialogTitle>
      <DialogContent
        sx={{
          m: "0",
        }}
      >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="QR Code Profile" value="1" />
              <Tab label="QR Links" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Stack
              sx={{
                width: "400",
                display: "flex",
                flexDirection: "cloumn",
                textAlign: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
              spacing={3}
            >
              {QR?.QRlink && QR?.uuid  ? (
                <div>
                  <img
                    style={{
                      width: "15em",
                      height: "15em",
                      margin: " 0 auto",
                    }}
                    src={QR?.QRlink}
                    alt={"QR code"}
                  />
                  <Typography
                    sx={{
                      textAlignLast: "center",
                      background: "#BDBDBD",
                      p: "1em",
                      m: " 2em",
                      border: "none",
                      borderRadius: "10px",
                      overflowX: "hidden",
                      fontSize: "10pt",
                    }}
                    color="text.primary"
                  >
                    {process.env.REACT_APP_URL + "/" + QR?.uuid}
                    <ContentCopyIcon
                      sx={{
                        ml: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigator.clipboard.writeText(process.env.REACT_APP_URL + "/" + QR?.uuid);
                        dispatch(
                          toggleNotf({
                            success: true,
                            messages: "successfully copy link",
                          })
                        );
                      }}
                    />
                  </Typography>
                </div>
              ): <Button 
              sx={{
                ml: 1,
                width: "100%",
                textTransform: "capitalize",
              }}
              variant="contained"
              onClick={() => {
                createQRCode();
              }}
              >
                Generate QR For Profile 
              </Button> 
              }
            </Stack>
          </TabPanel>
          <TabPanel value="2">
            <Stack
              sx={{
                display: "flex",
                flexDirection: "cloumn",
                textAlign: "center",
                justifyContent: "center",
                margin: "0 auto",
                width: "400",
              }}
              spacing={3}
            >
              <FormControl
                sx={{ display: "flex", flexDirection: "row", width: 500 }}
              >
                <InputLabel sx={{ ml: -0.5 }} id="demo-multiple-checkbox-label">
                  Links
                </InputLabel>
                <Select
                  sx={{
                    width: "100%",
                  }}
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  multiple
                  value={linksId}
                  onChange={handleChangeLinksId}
                  input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => {
                    return getLinksType(selected).join(", ")
                  }
                }
                    
                  MenuProps={MenuProps}
                >
                  {links.map((link) => (
                    <MenuItem key={link?.id} value={link?.id}>
                      <ListItemText
                        sx={{
                          overflow: "hidden",
                        }}
                        primary={link?.url}
                      />
                      <Checkbox checked={linksId.indexOf(link?.id) > -1} />
                    </MenuItem>
                  ))}
                </Select>
                <Button
                  sx={{
                    ml: 1,
                    width: "50%",
                    textTransform: "capitalize",
                  }}
                  variant="contained"
                  disabled={linksId.length === 0}
                  onClick={() => {
                    createQRCodeForLinks(linksId);
                  }}
                >
                  Generate QR
                </Button>
              </FormControl>
              {QRLinks?.QRlink && QRLinks?.uuid && (
                <div>
                  <img
                    style={{
                      width: "15em",
                      height: "15em",
                      margin: " 0 auto",
                    }}
                    src={QRLinks?.QRlink}
                    alt={"QR code"}
                  />
                  <Typography
                    sx={{
                      textAlignLast: "center",
                      background: "#BDBDBD",
                      p: "1em",
                      m: " 2em",
                      border: "none",
                      borderRadius: "10px",
                      overflowX: "hidden",
                      fontSize: "10pt",
                    }}
                    color="text.primary"
                  >
                    {process.env.REACT_APP_URL + "/" + QRLinks?.uuid}
                    <ContentCopyIcon
                      sx={{
                        ml: "10px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        navigator.clipboard.writeText(process.env.REACT_APP_URL + "/" + QRLinks?.uuid);
                        dispatch(
                          toggleNotf({
                            success: true,
                            messages: "successfully copy link",
                          })
                        );
                      }}
                    />
                  </Typography>
                </div>
              )}
            </Stack>
          </TabPanel>
        </TabContext>
      </DialogContent>
      <DialogActions>
        <Button
        sx={{
          ":hover":{
            color: "red"
          }
        }}
          onClick={() => {
            handleClose(false);
          }}
        >
          Cancel
        </Button>
        <Button
        disabled={(value === "1" && !QR?.QRlink) || (value === "2" && !QRLinks?.QRlink)}
        onClick={async ()=> {
          downloadURI(value === "1" ? QR?.QRlink: QRLinks?.QRlink,
          value === "1"? QR?.uuid : QRLinks?.uuid)
        }}
        sx={{
          ":hover":{
            color: "#4993BC"
          }
        }}
        >download</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ShareModalDialog;
