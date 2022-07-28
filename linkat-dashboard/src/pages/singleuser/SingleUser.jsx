import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { deleteAdminAction } from '../../redux/actions/admins';
import { deleteUserAction, deleteUserLinkAction, getUserAction, getUserLinksAction, getUsersAction } from '../../redux/actions/users';
import { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CancelIcon from '@mui/icons-material/Cancel';
import ButtonGroup from '@mui/material/ButtonGroup';


const roles = {
    "1": "SuperAdmin",
    "2": "Admin",
    "3": "User"
}

const SingleUser = () => {
    const dispatch = useDispatch();
    const { userId } = useParams();
    const state = useSelector(state => state)
    let user = state.users.data.find(user => user.id == userId) || state.admins.data.find(admin => admin.id == userId) || null;
    console.log("user: ", user)
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    useEffect(() => {
        const fetchUsers = async () => {
            !user && await dispatch(getUsersAction());
            await dispatch(getUserAction(userId));
            await dispatch(getUserLinksAction(userId));
        }
        fetchUsers();
    }, []);

    const dispatchDeleteUser = async (user) => {
        await dispatch(deleteUserAction(user));
        setOpen(false);
    }

    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                {user ?
                    <div >
                        <h1 className='m-5 text-center'>User id: {user.id}</h1>
                        <div className='d-flex justify-content-between align-items-end m-5'>
                            <div className='d-flex align-items-end gap-4'>
                                <img src={user.usersprofile.profilePic} style={{ width: "10em", height: "auto" }} />
                                <div className='d-flex flex-column'>
                                    <p>Username: {user.username}</p>
                                    <p>Email: {user.email}</p>
                                    <p>Role: {roles[user.roleId]}</p>
                                </div>
                            </div>
                            <Button color="error" variant="outlined" startIcon={<DeleteIcon />} onClick={handleClickOpen}>
                                Delete User
                            </Button>
                            <Dialog
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="alert-dialog-title"
                                aria-describedby="alert-dialog-description"
                                maxWidth='sm'
                                fullWidth={true}
                            >
                                <DialogTitle id="alert-dialog-title" className='text-center'>
                                    {"Are you sure you want to delete this user?"}
                                </DialogTitle>
                                <DialogActions sx={{ display: "flex", justifyContent: "center" }}>
                                    <Button color="primary" variant="outlined" startIcon={<CancelIcon />} onClick={handleClose} autoFocus>
                                        Cancel
                                    </Button>
                                    <Button color="error" variant="outlined" startIcon={<DeleteIcon />} onClick={() => dispatchDeleteUser(user)}>
                                        Delete
                                    </Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                        <h5 className='text-center'>{user.username}'s links table</h5>
                        <div>
                            <TableContainer component={Paper}>
                                <Table aria-label="Links table" stickyHeader sx={{ width: "60em", margin: "auto" }}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell >LinkType</TableCell>
                                            <TableCell align="middle">Icon</TableCell>
                                            <TableCell align="right">Link</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {user.links && user.links.length ? user.links.map((link, index) => (
                                            <TableRow key={index}>
                                                <TableCell component="th" scope="row">{link?.linktype?.type}</TableCell>
                                                <TableCell component="th" scope="row"><img src={link?.linktype?.icon} style={{ width: "5em", height: "5em" }} /></TableCell>
                                                <TableCell align="right">
                                                    {link.url}
                                                </TableCell>
                                                <TableCell align="right">
                                                    <Button color="error" variant="outlined" startIcon={<DeleteIcon />} onClick={() => dispatch(deleteUserLinkAction(user, link))}>
                                                        Delete Link
                                                    </Button>
                                                </TableCell>
                                            </TableRow >
                                        ))
                                            :
                                            <Typography>No links available</Typography>
                                        }
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </div>
                    </div>
                    :
                    <p>User does not exist</p>
                }

            </div>
        </div>
    );
}

export default SingleUser;
