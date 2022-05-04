import { useEffect, useState } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import EndpointExercise from '../../../models/EndpointExercise';
import Exercise from '../../../models/Exercise';

export const useFetchExercise = (
  url: string,
  method: string,
  content?: object
) => {
  const { data, loading, error } = useFetch(url, method, content);

  const [exercises, setExercises] = useState<Exercise[]>([]);

  useEffect(() => {
    if (error === null) {
      const exercisesConverted = exercisesDBToExercises(
        data as EndpointExercise[] | null
      );
      setExercises(exercisesConverted);
    }
  }, [data, error]);

  return {
    exercises,
    loading,
    error
  };
};

const exercisesDBToExercises = (
  exercisesDB: EndpointExercise[] | null
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
