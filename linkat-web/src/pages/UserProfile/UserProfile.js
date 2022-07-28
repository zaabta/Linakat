import React, { useState, useEffect } from "react";
import "./UserProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Typography,
  Box,
  Stack,
  IconButton,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { scanQRAciton } from "../../redux/actions/qrcodes";
import ShowLinkModalDialog from "../../components/ModalDialog/ShowLinkModalDialog";
import LinkIcon from '@mui/icons-material/Link';
import MoreVertIcon from "@mui/icons-material/MoreVert";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { uuid } = useParams();
  const data = useSelector((state) => state?.qrcodes?.Data);
  const [openMenu, setOpenMenu] = useState(null);
  const [showLink, setShowLink] = useState(false);
  const [Link, setLink] = useState(null);
  const handleOnOpenShowLink = (link) => {
    setShowLink(true);
  };

  const handleOnCloseShowLink = () => { 
    setShowLink(false);
  };

  const handleOnOpenMenu = (event, link) => {
    setLink(link);
    setOpenMenu(event.currentTarget);
  };
  const handleOnCloseMenu = () => {
    setLink(null);
    setOpenMenu(null);
  };

  const getUserProfileByUuid = async (uuid) => {
    await dispatch(
      scanQRAciton({
        uuid
      })
    )
      .then(() => console.log("scanQRAciton", "success"))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getUserProfileByUuid(uuid);
  }, []);

  return (
    <div className="user-profile">
      <div className="container">
        <img className="bgpic" src={data?.user?.usersprofile?.bgPic} />
        <Avatar
          sx={{
            m: "0 auto",
            mt: "-2em",
            width: "6em",
            height: "6em",
            mb: "4px",
          }}
          src={data?.user?.usersprofile?.profilePic}
        />
        <div className="profile-name-bio">
          <Typography variant="h4" component="h2" color="dark">
            {data?.user?.username || "linkat"}
          </Typography>
          {data?.user?.usersprofile?.nickname && (
            <Typography variant="h6" component="h2" color="dark">
              {data?.user?.usersprofile?.nickname}
            </Typography>
          )}
          {data.user?.usersprofile?.bio && (
            <Typography
              sx={{
                p:{ xs: ".2em 1em .5em .8em", md: "1em 10em 2em 10em" },
                textAlignLast: "center",
                textTransform: "capitalize",
                whiteSpace: "pre-wrap",
                wordWrap: "break-word"
              }}
              variant="p"
              component="p"
              color="dark"
              size="small"
            >
              {data.user?.usersprofile?.bio}
            </Typography>
          )}
        </div>
        <Box>
          <Stack sx={{ m: "0 4em" }} spacing={2} elevation={3}>
            {data?.links?.map((link, i) => (
              <Box
                sx={{
                  bgcolor: "background.default",
                }}
                display="flex"
                flexDirection="row"
                textAlign={"center"}
                justifyContent="space-between"
                key={i}
              >
                <Avatar
                  sx={{
                    m: ".3em",
                  }}
                  src={link?.linktype?.icon}
                />
                <Typography
                  sx={{
                    textAlignLast: "center",
                    textTransform: "capitalize",
                  }}
                  color="text.primary"
                >
                  {link?.linktype?.type}
                </Typography>
                <IconButton
                  aria-label="add to shopping cart"
                  onClick={(e)=> handleOnOpenMenu(e, link)}
                >
                  <MoreVertIcon />
                </IconButton>
                <Menu
                  id="basic-menu"
                  anchorEl={openMenu}
                  open={Boolean(openMenu)}
                  onClose={handleOnCloseMenu}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem onClick={() => handleOnOpenShowLink(link)}>
                    <LinkIcon
                      sx={{
                        pr: ".2em",
                      }}
                    />
                    open
                  </MenuItem>
                  <ShowLinkModalDialog
                    open={showLink}
                    handleClose={handleOnCloseShowLink}
                    link={Link}
                    handleCloseMenu={handleOnCloseMenu}
                  />
                </Menu>
              </Box>
            ))}
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default UserProfile;
