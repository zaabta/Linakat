import React from "react";
import "./Dropdown.css";
import { GrLanguage } from "react-icons/gr";
import { MdOutlineDarkMode } from "react-icons/md";
import { VscSignIn } from "react-icons/vsc";
import { IoIosArrowForward } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/actions/users";
import { useDispatch } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";

const Dropdown = ({ eventButton }) => {
  const isAuthenticated = useSelector((state) => state?.auth?.isAuthenticated);
  const profilePic = useSelector(
    (state) => state?.auth?.data?.user?.usersprofile?.profilePic
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const logout = async () => {
    await dispatch(logoutAction())
      .then(() => navigate("/signin"))
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar src={profilePic} sx={{ width: 40, height: 40 }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link
          to={`/profile`}
          style={{
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <MenuItem>
            <Avatar src={profilePic}/> Profile
          </MenuItem>
        </Link>
        {isAuthenticated && (
          <Link
            to={`/editprofile`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <MenuItem>
              <EditIcon sx={{ pr: "6px" }} /> Edit profile
            </MenuItem>
          </Link>
        )}
        <Divider />
        <MenuItem
          onClick={() => {
            if (!isAuthenticated) navigate("/signin");
            else logout();
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          {isAuthenticated ? "Logout" : "Sign in"}
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Dropdown;
