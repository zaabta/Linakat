import React, {useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Box, Typography } from "@mui/material";
import AddModalDialog from "../ModalDialog/AddModalDialog";
import { useSelector } from "react-redux";

const AddLink = () => {
  const linkTypes = useSelector((state) => state?.links.linkTypes);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  return (
    <Box
      sx={{
        bgcolor: "background.default",
        cursor: "pointer",
      }}
      display="flex"
      flexDirection="row"
      textAlign={"center"}
      p="1em 2em"
      justifyContent="center"
    >
      <AddIcon />
      <Typography
        sx={{
          textAlignLast: "center",
          textTransform: "capitalize",
          p: "0 2em",
        }}
        color="text.primary"
        disabled={!linkTypes}
        onClick={()=> {
          setOpenAddDialog(true)
        }}
      >
        {"Add Link and Contact info"}
      </Typography>
      <AddModalDialog
        open={openAddDialog}
        handleOnClose={setOpenAddDialog}
      />
    </Box>
  );
};

export default AddLink;
