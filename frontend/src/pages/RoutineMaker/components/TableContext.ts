import { createContext } from 'react';
import { emptyTable } from '../helpers/tableReducer';
import { tableHook } from '../hooks/useTable';

const emptyTableHook: tableHook = {
  table: emptyTable,
  dispatch: () => {}
};

export const TableContext = createContext<tableHook>(emptyTableHook);
