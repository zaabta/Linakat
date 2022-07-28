import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeRoleAction } from '../../redux/actions/admins';

const ChangeRole = ({ user }) => {
    const roles = {
        "1": "superAdmin",
        "2": "admin",
        "3": "user",
    }

    const [role, setRole] = useState();
    const dispatch = useDispatch();

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    useEffect(() => {
        role && dispatch(changeRoleAction({ user, role }))
    }, [role]);

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="change-role">Role</InputLabel>
                <Select
                    labelId="change-role"
                    id="change-role"
                    value={role || roles[user.roleId]}
                    label="Role"
                    onChange={handleChange}
                >
                    <MenuItem value={roles[3]}>{roles[3]}</MenuItem>
                    <MenuItem value={roles[2]}>{roles[2]}</MenuItem>
                    <MenuItem value={roles[1]}>{roles[1]}</MenuItem>
                </Select>
            </FormControl>
        </Box >
    );
}

export default ChangeRole;
