import RmExercise from '../../../models/RmExercise';
import { RTable } from '../models/table';

export const updateTableRmField = (
  table: RTable,
  rmExercises: RmExercise[]
): RTable => {
  table.rows = table.rows.map((row) => {
    const newRow = row.columns.map((column) => {
      const rmExercise = rmExercises.find((rmExercise) => {
        const tableExercise = column.exercise.trim().toLowerCase();
        const exercise = rmExercise.exercise.label.trim().toLowerCase();
        return tableExercise === exercise;
      });
      const weight = calculateRm(rmExercise) || column.weight;

      return { ...column, weight: weight };
    });

    return { ...row, columns: newRow };
  });

  return { ...table };
};

const calculateRm = (rmExercise: RmExercise | undefined) => {
  if (rmExercise === undefined) {
    return undefined;
  }

  const rm = rmExercise.rm.toString();

  return rm;
};
