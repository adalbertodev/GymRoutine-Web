import { RTable } from '../models/RTable';
import RmExercise from '../../../models/RmExercise';
import { tableReducerAction } from './tableReducer';

export const changeInput = (table: RTable, action: tableReducerAction) => {
  const payload = action.payload as { name: string; value: string };

  const [, rowNumber, , columnNumber, cellField] = payload.name.split('.');

  const rowss = table.rows.map((row, i) => {
    const newColumn = row.columns.map((column, j) => {
      if (i === parseInt(rowNumber) && j === parseInt(columnNumber)) {
        return {
          ...column,
          [cellField]: payload.value
        };
      }
      return column;
    });
    return {
      ...row,
      columns: newColumn
    };
  });

  return { ...table, rows: rowss };
};

export const introduceRM = (table: RTable, action: tableReducerAction) => {
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
};
