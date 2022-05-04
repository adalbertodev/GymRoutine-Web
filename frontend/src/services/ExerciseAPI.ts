import Exercise from '../models/Exercise';
import axios from 'axios';

export const getExercises = async () => {
  const url = process.env.REACT_APP_API_URL + 'exercises';
  try {
    const { data } = await axios.get<Exercise[]>(url, {
      headers: {
        Accept: 'application/json'
      }
    });
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('Error: ', error.message);
      throw new Error(error.message);
    }
    console.log('Unexpected error: ', error);
    throw new Error('An unexpexted error occurred');
  }

  // let response = await fetch(url, {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // });
  // return await response.json();
};

export async function getExerciseById(id: string) {
  let url = process.env.REACT_APP_API_URL + 'exercises/' + id;
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export async function postExercise(exercise: Exercise) {
  let url = process.env.REACT_APP_API_URL + 'exercises';
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(exercise)
  });
  return await response.json();
}

export async function deleteExerciseById(id: string) {
  let url = process.env.REACT_APP_API_URL + 'exercises/' + id;
  let response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

export async function deleteExercise(exercise: Exercise) {
  let url = process.env.REACT_APP_API_URL + 'exercises';
  let response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(exercise)
  });
  return await response.json();
}
