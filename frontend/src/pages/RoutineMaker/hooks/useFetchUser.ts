import { useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import User, { UserDB } from '../entities/User';

export const useFetchUser = (url: string, method: string, content?: object) => {
  const { state, setUrl } = useFetch(url, method, content);
  const { data, loading, error } = state;

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
    error,
    setUrl
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
