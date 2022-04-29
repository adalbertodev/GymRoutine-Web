import { useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import RmExercise, { RmExerciseDB } from '../entities/RmExercise';

export const useFetchRmExercise = (
  url: string | undefined,
  method: string,
  content?: object
) => {
  const { state, setUrl } = useFetch(url, method, content);
  const { data, loading, error } = state;

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
    error,
    setUrl
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
