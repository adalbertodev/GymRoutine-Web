import Exercise from '../models/Exercise';
import EndpointExercise from '../models/EndpointExercise';

export const createAddapterExercise = (exercise: EndpointExercise) => {
  const formattedExercise: Exercise = {
    id: exercise.id,
    label: exercise.name,
    muscle: exercise.muscle,
    bar: exercise.bar
  };

  return formattedExercise;
};
