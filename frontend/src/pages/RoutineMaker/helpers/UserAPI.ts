// import User from './entities/User';
// import data from './entities/Users.json';

import User from '../../../models/User';

export async function getUsers() {
  let url = process.env.REACT_APP_API_URL + 'users';
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export async function getUserById(id: string) {
  let url = process.env.REACT_APP_API_URL + 'users/' + id;
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export async function postUser(user: User) {
  let url = process.env.REACT_APP_API_URL + 'users';
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return await response.json();
}

export async function deleteUserById(id: string) {
  let url = process.env.REACT_APP_API_URL + 'users/' + id;
  let response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export async function deleteUser(user: User) {
  let url = process.env.REACT_APP_API_URL + 'users';
  let response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  return await response.json();
}
