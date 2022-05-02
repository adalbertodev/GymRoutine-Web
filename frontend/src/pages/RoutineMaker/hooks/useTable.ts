import { useReducer } from 'react';
import { RTable } from '../components/Table/RoutineTable';
import {
  emptyTable,
  tableReducer,
  tableReducerAction
} from '../helpers/tableReducer';

export interface tableHook {
  table: RTable;
  dispatch: React.Dispatch<tableReducerAction>;
}

export const useTable = (): tableHook => {
  const [table, dispatch] = useReducer(tableReducer, emptyTable);

  return { table, dispatch };
};
