import React from "react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";

import WallpaperIcon from "@mui/icons-material/Wallpaper";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LockIcon from "@mui/icons-material/Lock";
import FeedIcon from '@mui/icons-material/Feed';
import MailIcon from "@mui/icons-material/Mail";
import BadgeIcon from "@mui/icons-material/Badge";

const DrawerList = ({ open, setOpen }) => {
  return (
    <List>
      <Link sx={{ color:"inherit" , textDecoration:"none"}} href="/editprofile/changeprofilepic">
        <ListItem
          key={"ChangeProfilePic"}
          sx={{ display: "block" }}
          disablePadding
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText
              primary={"profile image"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link sx={{ color:"inherit" , textDecoration:"none"}} href="/editprofile/changebgpic">
        <ListItem key={"ChangeBgPic"} sx={{ display: "block" }} disablePadding>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <WallpaperIcon />
            </ListItemIcon>
            <ListItemText
              primary={"background image"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link sx={{ color:"inherit" , textDecoration:"none"}} href="/editprofile/changemail">
        <ListItem key={"ChangeEmail"} sx={{ display: "block" }} disablePadding>
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <MailIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Change Email"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link sx={{ color:"inherit" , textDecoration:"none"}} href="/editprofile/changepassword">
        <ListItem
          key={"ChangePassword"}
          sx={{ display: "block" }}
          disablePadding
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <LockIcon />
            </ListItemIcon>

            <ListItemText
              primary={"ChangePassword"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
      <Link sx={{ color:"inherit" , textDecoration:"none"}} href="/editprofile/changeprofile">
        <ListItem
          key={"ChangeProfile"}
          sx={{ display: "block" }}
          disablePadding
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <FeedIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Bio and Nickname"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
      
      <Link sx={{ color:"inherit" , textDecoration:"none"}} href="/editprofile/changeusername">
        <ListItem
          key={"ChangeUsername"}
          sx={{ display: "block" }}
          disablePadding
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: open ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <BadgeIcon />
            </ListItemIcon>
            <ListItemText
              primary={"Change Username"}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
      </Link>
    </List>
  );
};

export default DrawerList;
