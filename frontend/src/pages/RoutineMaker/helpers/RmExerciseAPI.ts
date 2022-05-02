// import { useFetch } from '../../../hooks/useFetch';
// import Exercise from '../entities/Exercise';

import RmExercise, { RmExerciseDB } from '../entities/RmExercise';

// export async function fetchToAPI_RmExercise(
// ) {
//   const { state } = useFetch(url, method, content);
//   let url = process.env.REACT_APP_API_URL + 'exercises';
//   let response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   });
//   return await response.json();
// }

const rmExercisesDBToRmExercises = (
  rmExercisesDB: RmExerciseDB[] | null
): RmExercise[] => {
  if (rmExercisesDB === null) {
    return [];
  }

  return rmExercisesDB.map((rmExerciseTable) => {
    return {
      user: {
        id: rmExerciseTable.user.id,
        name: rmExerciseTable.user.name,
        password: rmExerciseTable.user.password
      },
      exercise: {
        id: rmExerciseTable.exercise.id,
        label: rmExerciseTable.exercise.name,
        muscle: rmExerciseTable.exercise.muscle,
        bar: rmExerciseTable.exercise.bar
      },
      rm: rmExerciseTable.rm
    };
  });
};
