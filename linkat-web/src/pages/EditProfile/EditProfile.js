import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import MuiDrawer from "@mui/material/Drawer";
import { Box, CssBaseline, Divider, IconButton } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SwitchComponents from "../../components/SwitchComponents/SwitchComponents";
import DrawerList from "../../components/DrawerList/DrawerList";
import {
  ChangeProfilePic,
  ChangeBgPic,
} from "../../components/EditProfile/index.js";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./EditProfile.css";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const EditProfile = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const { option } = useParams();
  const user = useSelector((state) => state?.auth?.data?.user);

  return (
    <div className="editprofile">
      <Drawer sx={{ margin: "" }} variant="permanent" open={open}>
        <DrawerHeader />
        <DrawerHeader />
        <DrawerHeader>
          <IconButton
            onClick={() => {
              setOpen(!open);
            }}
          >
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <DrawerList setOpen={setOpen} open={open} />
      </Drawer>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          m: "0 auto",
          height: "100vh",
        }}
      >
        <CssBaseline />
        {!option || option == "changeprofilepic" ? (
          <Box
            component="main"
            sx={{ flexGrow: 1, pl: 0, pr: 50, pt: 10, pd: 0, m: "0 auto" }}
          >
            <ChangeProfilePic user={user} />
          </Box>
        ) : option == "changebgpic" ? (
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              pl: 0,
              pr: 50,
              pt: 10,
              pd: 0,
              m: "0 auto",
              position: "relative",
            }}
          >
            <ChangeBgPic />
          </Box>
        ) : (
          <Box
            component="main"
            sx={{ flexGrow: 1, pl: 0, pr: 50, pt: 10, pd: 0, m: "2em auto" }}
          >
            <ChangeProfilePic />
            <SwitchComponents option={option} />
          </Box>
        )}
      </Box>
    </div>
  );
};

export default EditProfile;
