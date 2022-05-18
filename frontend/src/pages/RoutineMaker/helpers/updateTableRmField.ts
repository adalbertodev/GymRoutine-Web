import { RTable, TableState } from '../models/table';
import DifficultyMultipliers from '../data/DifficultyMultipliers.json';
import Exercise from '../../../models/Exercise';

export const updateTableRmField = (tableState: TableState): RTable => {
  const { table, exercises, difficulty } = tableState;

  table.rows = table.rows.map((row) => {
    const newRow = row.columns.map((column) => {
      if (column.exercise.trim() === '') {
        return { ...column };
      }

      const exercise = exercises.find((exercise) => {
        const tableExercise = column.exercise.trim().toLowerCase();
        const exerciseLabel = exercise.label.trim().toLowerCase();
        return tableExercise === exerciseLabel;
      });
      const weight =
        calculateRm(exercise, column.repetitions, difficulty) || column.weight;

      return { ...column, weight: weight };
    });

    return { ...row, columns: newRow };
  });

  return { ...table };
};

const calculateRm = (
  exercise: Exercise | undefined,
  repetitions: string,
  difficulty: number
) => {
  if (exercise === undefined || !exercise.rm) {
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

  const calculatedRm = (exercise.rm * multiplier).toString();

  return calculatedRm;
};
