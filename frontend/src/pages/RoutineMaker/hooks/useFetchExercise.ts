import { useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import Exercise, { ExerciseDB } from '../entities/Exercise';

export const useFetchExercise = (
  url: string,
  method: string,
  content?: object
) => {
  const { state, setUrl } = useFetch(url, method, content);
  const { data, loading, error } = state;

  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    if (error === null) {
      const exercisesConverted = exercisesDBToExercises(
        data as ExerciseDB[] | null
      );
      setExercises(exercisesConverted);
    }
  }, [data, error]);

  return {
    exercises,
    loading,
    error,
    setUrl
  };
};

const exercisesDBToExercises = (
  exercisesDB: ExerciseDB[] | null
): Exercise[] => {
  if (exercisesDB === null) {
    return [];
  }

  return exercisesDB.map((exerciseTable) => {
    return {
      id: exerciseTable.id,
      label: exerciseTable.name,
      muscle: exerciseTable.muscle,
      bar: exerciseTable.bar
    };
  });
};
