import React from 'react';
import { useState } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { editLinkIconAction, editLinkTypeAction } from '../../redux/actions/linktypes';

const LinkType = ({ linktype }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        type: linktype.type,
        icon: linktype.icon
    });

    return (
        <TableRow>
            <TableCell component="th" scope="row">
                <TextField
                    fullWidth
                    type="string"
                    label="Link Type"
                    name="type"
                    value={data.type}
                    onChange={async (e) => {
                        setData({ ...data, type: e.target.value })
                        await dispatch(editLinkTypeAction(linktype, e.target.value))
                            .catch((e) => console.error(e));
                    }}
                />
            </TableCell>
            <TableCell align="right">
                <img src={data?.icon} style={{ width: "5em", height: "5em" }} />
            </TableCell>

            <TableCell align="left">
                <label className="form-label" htmlFor="customFile">Edit Icon</label>
                <input type="file" className="form-control" id="customFile"
                    onChange={async (e) => {
                        const formData = new FormData();
                        formData.append("file", e.target.files[0]);
                        await dispatch(editLinkIconAction(linktype, formData))
                            .catch((e) => console.error(e));
                        setData({ ...data, icon: linktype.icon })
                    }} />

            </TableCell>
        </TableRow >
    );
}

export default LinkType;
