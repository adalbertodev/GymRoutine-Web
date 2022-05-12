import { memo, useState } from 'react';
import { TableConfiguratorContainer } from '../styled-components/Configurator';
import { SelectChangeEvent } from '@mui/material';
import { useEffect } from 'react';
import User from '../../../models/User';
import RoutineTemplates from '../data/RoutineTemplates.json';
import { Template } from '../models/table';
import { setTable } from '../contexts/tableActions';
import { useTable } from '../hooks/useTable';
import { getUsers } from '../../../services/UserAPI';
import { ConfiguratorSelect } from './inputs/ConfiguratorSelect';

interface TableConfiguratorProps {
  activeUserState: [
    User | undefined,
    React.Dispatch<React.SetStateAction<User | undefined>>
  ];
}

export const TableConfigurator: React.FC<TableConfiguratorProps> = memo(
  ({ activeUserState }) => {
    const { dispatch } = useTable();
    const [activeUser, setActiveUser] = activeUserState;
    const [users, setUsers] = useState<User[]>([]);
    const [templates, setTemplates] = useState<Template[]>([]);

    useEffect(() => {
      getUsers().then((users) => {
        setUsers(users);
      });
    }, []);

    useEffect(() => {
      if (users.length !== 0) {
        setActiveUser(users[0]);
      }
    }, [setActiveUser, users]);

    useEffect(() => {
      setTemplates(RoutineTemplates);
    }, []);

    const handleChange = (e: SelectChangeEvent) => {
      if (activeUser?.name === e.target.value) {
        return;
      }
      setActiveUser(users.find((user) => user.name === e.target.value));
    };

    const handleTemplateChange = (e: SelectChangeEvent<string>) => {
      const template = templates.find(
        (template) => template.name === e.target.value
      ) as Template;

      dispatch(setTable(template.table));
    };

    return (
      <TableConfiguratorContainer>
        <ConfiguratorSelect
          styles={{ m: 1, minWidth: 80 }}
          label='User'
          value={activeUser ? activeUser.name : ''}
          options={users}
          onChange={handleChange}
        />

        <ConfiguratorSelect
          styles={{ m: 1, minWidth: 120 }}
          label='Templates'
          value={''}
          options={templates.map((template) => ({
            id: template.name,
            name: template.name
          }))}
          onChange={handleTemplateChange}
        />
      </TableConfiguratorContainer>
    );
  }
);
