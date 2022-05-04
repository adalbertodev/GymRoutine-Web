import { useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { EndpointRmExercise } from '../../../models/EndpointRmExercise';
import RmExercise from '../../../models/RmExercise';

export const useFetchRmExercise = (
  url: string,
  method: string,
  content?: object
) => {
  const { data, loading, error } = useFetch(url, method, content);

  const [rmExercises, setRmExercises] = useState<RmExercise[]>([]);

  useEffect(() => {
    if (error === null) {
      const rmExercisesConverted = rmExercisesDBToRmExercises(
        data as EndpointRmExercise[] | null
      );
      setRmExercises(rmExercisesConverted);
    }
  }, [data, error]);

  return {
    rmExercises,
    loading,
    error
  };
};

const rmExercisesDBToRmExercises = (
  rmExercisesDB: EndpointRmExercise[] | null
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
