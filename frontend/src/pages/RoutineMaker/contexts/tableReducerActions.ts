import RmExercise from '../../../models/RmExercise';
import { InputData, RTable, TableState } from '../models/table';

export const updateInputValue = (
  tableState: TableState,
  inputData: InputData
) => {
  const { table } = tableState;

  const [, rowNumber, , columnNumber, cellField] = inputData.name.split('.');

  const rowss = table.rows.map((row, i) => {
    const newColumn = row.columns.map((column, j) => {
      if (i === parseInt(rowNumber) && j === parseInt(columnNumber)) {
        return {
          ...column,
          [cellField]: inputData.value
        };
      }
      return column;
    });
    return {
      ...row,
      columns: newColumn
    };
  });

  return { ...tableState, table: { ...table, rows: rowss } };
};

export const introduceRM = (
  tableState: TableState,
  rmExercises: RmExercise[]
) => {
  const { table } = tableState;

  const rows = table.rows.map((row) => {
    const newColumn = row.columns.map((column) => {
      const exercise = tableState.exercises?.find((exercise) => {
        return exercise.label === column.exercise;
      });

      if (exercise === undefined) {
        return column;
      }

      const rmExercise = rmExercises.find((rmExercise: RmExercise) => {
        return rmExercise.exercise.id === exercise.id;
      });

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
    ...tableState,
    table: { ...table, rows: rows }
  };
};

export const setTemplate = (tableState: TableState, newTable: RTable) => {
  const { table } = tableState;
  return { ...tableState, table: { ...table, ...newTable } };
};
