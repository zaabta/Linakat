import React, { useState } from "react";
import { Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import LinkIcon from '@mui/icons-material/Link';
import EditModalDialog from "../ModalDialog/EditModalDialog";
import DeleteModalDialog from "../ModalDialog/DeleteModalDialog";
import ShowLinkModalDialog from "../ModalDialog/ShowLinkModalDialog"

const LinkMenu = ({ anchorEl, open, handleClose, link, linkId }) => {
  const [editDialog, setEditDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [showLinkDialog, setShowLinkDialog] = useState(false);

  const handleOnOpenShowLink = () => {
    setShowLinkDialog(true);
  }

  const handleOnCloseShowLink = () => {
    setShowLinkDialog(false);
  }

  const handleOnOpenEditDialog = () => {
    setEditDialog(true);
  };

  const handleOnCloseEditDialog = () => {
    setEditDialog(false);
  };

  const handleOnOpenDeleteDialog = () => {
    setDeleteDialog(true);
  };
  const handleOnCloseDeleteDialog = () => {
    setDeleteDialog(false);
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleOnOpenShowLink}>
        <LinkIcon
          sx={{
            pr: ".2em",
          }}
        />
        open
      </MenuItem>

      <MenuItem onClick={handleOnOpenEditDialog}>
        <EditIcon
          sx={{
            pr: ".2em",
          }}
        />
        Edit
      </MenuItem>
      <MenuItem onClick={handleOnOpenDeleteDialog}>
        <DeleteForeverIcon
          sx={{
            pr: ".2em",
          }}
        />
        Delete
      </MenuItem>   

      <EditModalDialog
        open={editDialog}
        handleClose={handleOnCloseEditDialog}
        linkId={linkId}
        handleCloseMenu={handleClose}
      />
      <DeleteModalDialog
        open={deleteDialog}
        handleClose={handleOnCloseDeleteDialog}
        linkId={linkId}
        handleCloseMenu={handleClose}
      />

      <ShowLinkModalDialog
        open={showLinkDialog}
        handleClose={handleOnCloseShowLink}
        link={link}
        handleCloseMenu={handleClose}
      />
    </Menu>
  );
};

export default LinkMenu;
