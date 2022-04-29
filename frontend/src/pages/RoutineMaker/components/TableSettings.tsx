/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { ConfigBox } from '../styled-components/ConfigBox';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useFetchUser } from '../hooks/useFetchUser';
import User from '../entities/User';

const TableSettings: React.FC = () => {
  const url = process.env.REACT_APP_API_URL + 'users';
  const { users, loading, error } = useFetchUser(url, 'GET');
  const [activeUser, setActiveUser] = useState<User>();

  const handleChange = (e: SelectChangeEvent) => {
    setActiveUser(users.find((user) => user.name === e.target.value));
  };

  useEffect(() => {
    if (!loading && error === null) {
      setActiveUser(users[0]);
    }
  }, [users]);

  return (
    <ConfigBox>
      <FormControl sx={{ m: 1, minWidth: 80 }} size='small'>
        <InputLabel id='demo-simple-select-autowidth-label'>User</InputLabel>
        <Select
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value={activeUser ? activeUser.name : ''}
          onChange={(e) => handleChange(e)}
          autoWidth
          label='User'
        >
          {users.length !== 0 ? (
            users.map((user) => (
              <MenuItem key={user.id} value={user.name}>
                {user.name}
              </MenuItem>
            ))
          ) : (
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
          )}
        </Select>
      </FormControl>
    </ConfigBox>
  );
};

export default TableSettings;
