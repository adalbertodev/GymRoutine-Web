import { useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import User, { UserDB } from '../../../models/User';

export const useFetchUser = (url: string, method: string, content?: object) => {
  const { data, loading, error } = useFetch(url, method, content);

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (error === null) {
      const usersConverted = usersDBToUsers(data as UserDB[] | null);
      setUsers(usersConverted);
    }
  }, [data, error]);

  return {
    users,
    loading,
    error
  };
};

const usersDBToUsers = (usersDB: UserDB[] | null): User[] => {
  if (usersDB === null) {
    return [];
  }

  return usersDB.map((userTable) => {
    return {
      id: userTable.id,
      name: userTable.name,
      password: userTable.password
    };
  });
};
