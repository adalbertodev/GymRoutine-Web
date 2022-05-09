import Exercise from '../../../models/Exercise';
import RmExercise from '../../../models/RmExercise';
import { RTable } from '../models/table';

export const updateTableRmField = (
  table: RTable,
  exercises: Exercise[],
  rmExercises: RmExercise[]
): RTable => {
  table.rows = table.rows.map((row) => {
    const newRow = row.columns.map((column) => {
      const exercise = exercises.find((exercise) => {
        return exercise.label === column.exercise;
      });
      const weight = calculateRm(exercise, rmExercises) || column.weight;

      return { ...column, weight: weight };
    });

    return { ...row, columns: newRow };
  });

  return { ...table };
};

const calculateRm = (
  exercise: Exercise | undefined,
  rmExercises: RmExercise[]
) => {
  const rmExercise = searchRmExercise(exercise, rmExercises);

  if (rmExercise === undefined) {
    return undefined;
  }

  const rm = rmExercise.rm.toString();

  return rm;
};

const searchRmExercise = (
  exercise: Exercise | undefined,
  rmExercises: RmExercise[]
) => {
  if (exercise === undefined) {
    return undefined;
  }

  return rmExercises.find((rmExercise: RmExercise) => {
    return rmExercise.exercise.id === exercise.id;
  });
};
