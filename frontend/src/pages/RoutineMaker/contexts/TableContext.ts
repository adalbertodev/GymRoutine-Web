import { createContext } from 'react';
import { emptyTable } from '../helpers/tableReducer';
import { tableHook } from '../hooks/useTable';

export const TableContext = createContext<tableHook>({
  table: emptyTable,
  dispatch: () => {}
});
