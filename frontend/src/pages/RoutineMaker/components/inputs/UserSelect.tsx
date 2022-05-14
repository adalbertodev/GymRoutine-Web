import { SelectChangeEvent } from '@mui/material';
import { memo, useEffect, useState } from 'react';
import User from '../../../../models/User';
import { getUsers } from '../../../../services/UserAPI';
import { ConfiguratorSelect } from './ConfiguratorSelect';

interface UserSelectProps {
  onChange?: (e: SelectChangeEvent<string>) => void;
  activeUserState: [
    User | undefined,
    React.Dispatch<React.SetStateAction<User | undefined>>
  ];
}

export const UserSelect: React.FC<UserSelectProps> = memo(
  ({ onChange, activeUserState }) => {
    const [activeUser, setActiveUser] = activeUserState;
    const [users, setUsers] = useState<User[]>([]);

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

    const handleChange = (e: SelectChangeEvent) => {
      if (activeUser?.name === e.target.value) {
        return;
      }
      setActiveUser(users.find((user) => user.name === e.target.value));
    };

    return (
      <ConfiguratorSelect
        styles={{ m: 1, minWidth: 80 }}
        label='User'
        value={activeUser?.name || ''}
        options={users}
        onChange={onChange || handleChange}
      />
    );
  }
);
