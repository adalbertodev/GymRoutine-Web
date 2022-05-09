import React, { useContext, useMemo } from 'react';
import { ConfigBox } from '../styled-components/ConfigBox';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material';
import { useEffect } from 'react';
import User from '../../../models/User';
import { useFetch } from '../../../hooks/useFetch';
import RoutineTemplates from '../data/RoutineTemplates.json';
import { TableContext } from '../contexts/TableContext';
import { RTable } from '../models/table';
import { setTable } from '../contexts/tableActions';

const TableSettings: React.FC<settingsProps> = React.memo(
  ({ activeUserState }) => {
    const { dispatch } = useContext(TableContext);
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

    interface Template {
      table: RTable;
      name: string;
    }

    const templates = RoutineTemplates as Template[];

    const handleTemplateChange = (e: SelectChangeEvent<string>) => {
      const template = templates.find(
        (template) => template.name === e.target.value
      ) as Template;

      dispatch(setTable(template.table));
    };

    // console.log('TableSettings');

    useEffect(() => {
      if (users.length !== 0) {
        setActiveUser(users[0]);
      }
    }, [setActiveUser, users]);

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

        <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
          <InputLabel id='demo-simple-select-autowidth-label'>
            Template
          </InputLabel>
          <Select
            labelId='demo-simple-select-autowidth-label'
            id='demo-simple-select-autowidth'
            value={''}
            onChange={(e) => handleTemplateChange(e)}
            // onClick={handleTemplateClick}
            autoWidth
            label='Template'
          >
            {templates.length !== 0 ? (
              templates.map((template, i) => (
                <MenuItem
                  key={'template' + i}
                  value={template.name}
                  onChange={(e) => console.log(e)}
                >
                  {template.name}
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
