import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useEffect } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersAction } from '../../redux/actions/users';
import User from '../../components/user/User';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


const ListUsers = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.data);
    console.log("getting users from global state")

    useEffect(() => {
        const fetchUsers = async () => {
            await dispatch(getUsersAction());
        }
        fetchUsers();
    }, []);


    return (
        <div className="list">
            <Sidebar />
            <div className="listContainer">
                <Navbar />
                <Box sx={{
                    backgroundColor: "#2196f3",
                    marginTop: "-3",
                    borderRadius: "10px",
                }}
                    mx={5}
                    mt={-3}
                    py={3}
                    px={2}
                >
                    <Typography
                        sx={{ flex: '1 1 100%' }}
                        variant="h6"
                        id="tableTitle"
                        component="div"
                        color="white"
                    >
                        Users
                    </Typography>
                </Box>
                <TableContainer component={Paper}>
                    <Table aria-label="Users table" stickyHeader sx={{ width: "60em", margin: "auto" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell ></TableCell>
                                <TableCell >Username</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Role</TableCell>
                                <TableCell align="right">isActive</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users && users.length ? users.map((user, index) => (
                                <User user={user} key={index} />
                            ))
                                :
                                <Typography>No users currently</Typography>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default ListUsers;
