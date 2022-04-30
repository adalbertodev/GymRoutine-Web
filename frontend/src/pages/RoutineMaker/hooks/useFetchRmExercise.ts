import { useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import RmExercise, { RmExerciseDB } from '../entities/RmExercise';

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
        data as RmExerciseDB[] | null
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
  rmExercisesDB: RmExerciseDB[] | null
): RmExercise[] => {
  if (rmExercisesDB === null) {
    return [];
  }

  return rmExercisesDB.map((rmExerciseTable) => {
    return {
      user: rmExerciseTable.user,
      exercise: rmExerciseTable.exercise,
      rm: rmExerciseTable.rm
    };
  });
};
