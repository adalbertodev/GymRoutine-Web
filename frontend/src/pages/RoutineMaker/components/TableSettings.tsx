/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from 'react';
import { ConfigBox } from '../styled-components/ConfigBox';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';
import { useEffect } from 'react';
// import { useFetchUser } from '../hooks/useFetchUser';
import User from '../entities/User';
import { useFetch } from '../../../hooks/useFetch';

const TableSettings: React.FC<settingsProps> = React.memo(
  ({ activeUserState }) => {
    const [activeUser, setActiveUser] = activeUserState;
    const url = process.env.REACT_APP_API_URL + 'users';
    const { data } = useFetch(url, 'GET');
    const users = useMemo(() => (data ? data : []), [data]) as User[];

    const handleChange = (e: SelectChangeEvent) => {
      if (activeUser?.name === e.target.value) {
        return;
      }
      setActiveUser(users.find((user) => user.name === e.target.value));
    };

    // console.log('TableSettings');

    useEffect(() => {
      if (users.length !== 0) {
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
  }
);

interface settingsProps {
  activeUserState: [
    User | undefined,
    React.Dispatch<React.SetStateAction<User | undefined>>
  ];
}

export default TableSettings;
