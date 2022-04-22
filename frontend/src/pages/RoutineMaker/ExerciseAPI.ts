// import Exercise from './entities/Exercise';
// import data from './entities/Exercises.json';

import Exercise from './entities/Exercise';

export async function getExercises() {
  let url = process.env.REACT_APP_API_URL + 'exercises';
  let response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return await response.json();
}

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
