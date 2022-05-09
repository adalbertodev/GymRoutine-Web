import { TableAction, TableState } from '../models/table';
import { updateTableInputValue } from '../helpers/updateTableInputValue';
import { updateTableRmField } from '../helpers/updateTableRmField';

export const tableReducer = (
  tableState: TableState,
  action: TableAction
): TableState => {
  const { table } = tableState;

  switch (action.type) {
    case 'addRow':
      return {
        ...tableState,
        table: { ...table, rows: [...table.rows, action.payload] }
      };

    case 'setExercises':
      return {
        ...tableState,
        exercises: action.payload
      };

    case 'setTable':
      return { ...tableState, table: { ...table, ...action.payload } };

    case 'updateInputValue':
      const name = action.payload.name;
      const value = action.payload.value;
      return {
        ...tableState,
        table: updateTableInputValue(table, name, value)
      };

    case 'updateRmFields':
      return {
        ...tableState,
        table: updateTableRmField(table, tableState.exercises, action.payload)
      };

    default:
      return tableState;
  }
};
