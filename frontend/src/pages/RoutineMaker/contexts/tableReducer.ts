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

    case 'deleteRow':
      if (table.rows.length <= 1) {
        return tableState;
      }
      return { ...tableState, table: { rows: [...table.rows.slice(0, -1)] } };

    case 'setExercises':
      return {
        ...tableState,
        exercises: action.payload
      };

    case 'changeDifficulty':
      return {
        ...tableState,
        difficulty: action.payload
      };

    case 'setTable':
      return {
        ...tableState,
        table: { ...action.payload }
      };

    case 'updateInputValue':
      const name = action.payload.name;
      const value = action.payload.value;
      return {
        ...tableState,
        table: { ...updateTableInputValue(table, name, value) }
      };

    case 'updateRmFields':
      return {
        ...tableState,
        table: {
          ...updateTableRmField(tableState)
        }
      };

    default:
      return tableState;
  }
};
