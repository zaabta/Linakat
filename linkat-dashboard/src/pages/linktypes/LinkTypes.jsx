import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { useEffect, useState } from 'react';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack } from '@mui/material';
import { addLinkTypeAction, getLinkTypesAction } from '../../redux/actions/linktypes';
import LinkType from '../../components/LinkType/LinkType';



const LinkTypes = () => {
    const dispatch = useDispatch();
    const linktypes = useSelector((state) => state.linktypes.data);

    const [open, setOpen] = useState(false);
    const [newLinkType, setNewLinkType] = useState("");

    const handleCreateLinkTypeAction = async (e) => {
        await dispatch(addLinkTypeAction(newLinkType))
            .catch((e) => console.error(e));
        setOpen(false);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const fetchLinkTypes = async () => {
            await dispatch(getLinkTypesAction())
        }
        fetchLinkTypes();
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
                        LinkTypes
                    </Typography>
                </Box>
                <TableContainer component={Paper}>
                    <Table aria-label="admins table" stickyHeader sx={{ width: "60em", margin: "auto" }}>
                        <TableHead>
                            <TableRow>
                                <TableCell >Type</TableCell>
                                <TableCell align="center">Icon</TableCell>
                                <TableCell ></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {linktypes && linktypes.length ? linktypes.map((linktype, index) => (
                                <LinkType linktype={linktype} key={index} />
                            ))
                                :
                                <Typography align='center'>No linktypes currently</Typography>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <Button variant="contained" onClick={handleClickOpen} sx={{ margin: "2em" }}>
                    Create new linktype
                </Button>
                <Dialog open={open} onClose={handleClose} fullWidth="sm">
                    <DialogTitle>Create a new link type</DialogTitle>
                    <DialogContent>
                        <Stack
                            spacing={3}
                            initial={{ opacity: 0, y: 40 }}
                        >
                            <TextField
                                fullWidth
                                type="string"
                                label="Link Type"
                                name="type"
                                onChange={(e) => {
                                    setNewLinkType(e.target.value)
                                }}
                            />
                        </Stack>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button onClick={handleCreateLinkTypeAction}>Create</Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div >
    );
}

export default LinkTypes;
