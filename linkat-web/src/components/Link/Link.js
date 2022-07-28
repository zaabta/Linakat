import React from "react";
import { Avatar, Box, Switch, Typography, IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LinkMenu from "../../components/LinkMenu/LinkMenu";

const Link = ({ icon, type, url, link, id }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.default",
      }}
      display="flex"
      flexDirection="row"
      textAlign={"center"}
      justifyContent="space-between"
    >
      <Avatar
        sx={{
          m: ".3em",
        }}
        src={icon}
      />
      <Typography
        sx={{
          textAlignLast: "center",
          textTransform: "capitalize",
          m:"auto"
        }}
        color="text.primary"
      >
        {type}
      </Typography>
      <IconButton aria-label="add to shopping cart" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <LinkMenu 
        anchorEl={anchorEl} 
        open={open} 
        handleClose={handleClose}
        link={link}
        linkId={id} />
    </Box>
  );
};

export default Link;
