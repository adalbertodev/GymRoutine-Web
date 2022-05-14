import RmExercise from '../../../models/RmExercise';
import { RTable, TableState } from '../models/table';
import DifficultyMultipliers from '../data/DifficultyMultipliers.json';

export const updateTableRmField = (
  tableState: TableState,
  rmExercises: RmExercise[]
): RTable => {
  const { table, difficulty } = tableState;

  table.rows = table.rows.map((row) => {
    const newRow = row.columns.map((column) => {
      const rmExercise = rmExercises.find((rmExercise) => {
        const tableExercise = column.exercise.trim().toLowerCase();
        const exercise = rmExercise.exercise.label.trim().toLowerCase();
        return tableExercise === exercise;
      });
      const weight =
        calculateRm(rmExercise, column.repetitions, difficulty) ||
        column.weight;

      return { ...column, weight: weight };
    });

    return { ...row, columns: newRow };
  });

  return { ...table };
};

const calculateRm = (
  rmExercise: RmExercise | undefined,
  repetitions: string,
  difficulty: number
) => {
  if (rmExercise === undefined) {
    return undefined;
  }
  const difficultyData = DifficultyMultipliers as {
    difficulty: number;
    multipliers: {
      [amount: string]: number;
    };
  }[];

  const difficultySelected = difficultyData.find(
    (data) => data.difficulty === difficulty
  );
  const multiplier = difficultySelected?.multipliers[repetitions] || 1;

  const calculatedRm = (rmExercise.rm * multiplier).toString();

  return calculatedRm;
};
