import React, { useState, useEffect } from "react";
import "./profile.css";
import { getUserInfoAction } from "../../redux/actions/users";
import { useDispatch, useSelector } from "react-redux";
import { Typography, Box, Stack, Button } from "@mui/material";
import { getUserLinksAction } from "../../redux/actions/links";
import { Avatar } from "@mui/material";
import Link from "../../components/Link/Link";
import { reoderLinksAction, getLinkTypesAction } from "../../redux/actions/links";
import AddLink from "../../components/AddLink/AddLink";
import ShareIcon from '@mui/icons-material/Share';
import ShareModalDialog from "../../components/ModalDialog/ShareModalDialog"

const Profile = () => {
  const dispatch = useDispatch();
  let links = useSelector((state) => state?.links?.links);
  const [openShareDialog, setOpenShareDialog] = useState(false);


  const user = useSelector((state) => state?.auth?.data?.user);

  const getUserInfo = async () => {
    await dispatch(getUserInfoAction())
      .then(() => console.log("getUserInfoAction", "sucess"))
      .catch((err) => console.error(err));
  };
  const getUserLinks = async () => {
    await dispatch(getUserLinksAction())
      .then(() => console.log("getUserLinksAction", "sucess"))
      .catch((err) => console.error(err));
  };
  /*const reoderLinks = async (order) => {
    await dispatch(reoderLinksAction({ newOrder: order }))
      .then(() => console.log("reoder links action", "sucess"))
      .catch((err) => console.error(err));
  };*/

  const getLinkTypes = async () => {
    await dispatch(getLinkTypesAction()).then(()=>{
      console.log("getLinkType", "success")
    }).catch((err)=> {
      console.error("getLinkType", err)
    })
  }

  useEffect(() => {
    getUserInfo();
    getUserLinks();
    getLinkTypes()
  }, []);


  return (
    <div className="profile">
      <div className="container">
        <img className="bgpic" src={user?.usersprofile?.bgPic} alt={user?.username}/>
        <Avatar
          sx={{
            m: "0 auto",
            mt: "-2em",
            width: "6em",
            height: "6em",
            mb: "4px",
          }}
          src={user?.usersprofile?.profilePic}
        />
        <div className="profile-name-bio">
          <Typography variant="h4" component="h2" color="dark">
            {user?.username || "linkat"}
          </Typography>
          {user?.usersprofile.nickname && (
            <Typography variant="h6" component="h2" color="dark">
              {user?.usersprofile?.nickname}
            </Typography>
          )}
          {user?.usersprofile.bio && (
            <Typography
              sx={{
                textAlignLast: "center",
                textTransform: "capitalize",
                whiteSpace: "wrap",
              }}
              variant="p"
              component="p"
              color="dark"
              p="1em 10em 2em 10em"
              size="small"
            >
              {user?.usersprofile.bio}
            </Typography>
          )}
        </div>
        <Button sx={{
          width:"fit-content",
          margin:"0em auto 2em auto"
        }} variant="contained"  onClick={()=>setOpenShareDialog(true)} startIcon={<ShareIcon />}>
            Share
          </Button>
          <ShareModalDialog open={openShareDialog} handleClose={setOpenShareDialog}/>
        <Box>
          <Stack sx={{ m: "0 4em" }} spacing={2} elevation={3}>
            {links?.map((link, i) => (
              <Link
                key={link?.id}
                icon={link?.linktype?.icon}
                type={link?.linktype?.type}
                url={link?.url}
                link={link}
                id={link?.id}
              />
            ))}
            <AddLink />
          </Stack>
        </Box>
      </div>
    </div>
  );
};

export default Profile;
