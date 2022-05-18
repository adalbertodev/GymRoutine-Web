import Exercise from '../models/Exercise';
import EndpointExercise from '../models/EndpointExercise';

export const createAddaptedExercise = (exercise: EndpointExercise) => {
  const formattedExercise: Exercise = {
    userId: exercise.userId,
    id: exercise.id,
    muscle: exercise.muscle,
    bar: exercise.bar,
    label: exercise.name,
    rm: exercise.rm
  };

  return formattedExercise;
};

export const createAddaptedExercises = (exercises: EndpointExercise[]) => {
  const formattedExercises = exercises.map((exercise) => {
    return createAddaptedExercise(exercise);
  });

  return formattedExercises;
};

export const addaptedToEndpointExercise = (exercise: Exercise) => {
  const unformattedExercise: EndpointExercise = {
    userId: exercise.userId,
    id: exercise.id,
    name: exercise.label,
    muscle: exercise.muscle,
    bar: exercise.bar,
    rm: exercise.rm
  };

  return unformattedExercise;
};

export const addaptedsToEndpointExercise = (exercises: Exercise[]) => {
  const unformattedExercises = exercises.map((exercise) => {
    return addaptedToEndpointExercise(exercise);
  });

  return unformattedExercises;
};
