import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

const Logo = ({w, h }) => {
  return (
    <Box>
      <Link to="/">
        <Box sx={{
          width: w || 250,
          height: h || 100,
        }} component="img" src="/asserts/icons/linkat-14.svg" alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;
