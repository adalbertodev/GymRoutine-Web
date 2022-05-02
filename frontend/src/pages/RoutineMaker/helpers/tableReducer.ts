import { Cell } from '../components/Table/RoutineCell';
import { Row } from '../components/Table/RoutineRow';
import { RTable } from '../components/Table/RoutineTable';
import Exercise from '../entities/Exercise';
import RmExercise from '../entities/RmExercise';

export interface tableReducerAction {
  type: string;
  payload: RmExercise[] | Exercise[];
}

export const tableReducer = (
  table = emptyTable,
  action: tableReducerAction
) => {
  switch (action.type) {
    case 'addRow':
      return {
        ...table,
        rows: [...table.rows, emptyRow]
      };

    case 'addExercises':
      return {
        ...table,
        exercises: action.payload as Exercise[]
      };

    case 'calculateRm':
      const rows = table.rows.map((row) => {
        const newColumn = row.columns.map((column) => {
          const exercise = table.exercises?.find((exercise) => {
            return exercise.label === column.exercise;
          });

          if (exercise === undefined) {
            return column;
          }

          const rmExercise = (action.payload as RmExercise[]).find(
            (rmExercise: RmExercise) => {
              return rmExercise.exercise.id === exercise.id;
            }
          );

          if (rmExercise === undefined) {
            return column;
          }

          return {
            ...column,
            weight: `${rmExercise.rm}`
          };
        });
        return {
          ...row,
          columns: newColumn
        };
      });
      return {
        ...table,
        rows: rows
      };

    default:
      return table;
  }
};

const emptyCell: Cell = {
  exercise: 'Press Banca',
  series: '',
  repetitions: '',
  weight: ''
};

const emptyRow: Row = {
  columns: [emptyCell, emptyCell, emptyCell, emptyCell, emptyCell]
};

export const emptyTable: RTable = {
  rows: [emptyRow],
  exercises: []
};
