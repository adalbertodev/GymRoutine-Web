import {
  updateInputValue,
  introduceRM,
  setTemplate
} from './tableReducerActions';
import { emptyRow } from '../helpers/emptyTable';
import { TableAction, TableState } from '../models/table';

export const tableReducer = (
  tableState: TableState,
  action: TableAction
): TableState => {
  const { table } = tableState;

  switch (action.type) {
    case 'addRow':
      return {
        ...tableState,
        table: { ...table, rows: [...table.rows, emptyRow] }
      };

    case 'setExercises':
      return {
        ...tableState,
        exercises: action.payload
      };

    case 'updateInputValue':
      return {
        ...tableState,
        table: { ...table, rows: [...table.rows, emptyRow] }
      };

    case 'setTable':
      return setTemplate(tableState, action.payload);

    case 'calculateRm':
      return introduceRM(tableState, action.payload);

    default:
      return tableState;
  }
};
