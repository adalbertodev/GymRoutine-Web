import Exercise, { ExerciseDB } from '../entities/Exercise';

export const exercisesDBToExercises = (
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
