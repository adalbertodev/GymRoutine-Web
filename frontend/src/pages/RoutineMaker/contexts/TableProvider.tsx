import { ChangeEvent, useCallback, useReducer } from 'react';
import { tableReducer } from '../contexts/tableReducer';
import { emptyTable } from '../utils/emptyTable';
import { TableProviderProps } from '../models/routineTableProps';
import { TableState } from '../models/table';
import { TableContext } from './TableContext';

const initialState: TableState = {
  table: emptyTable,
  exercises: []
};

export const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  const [tableState, dispatch] = useReducer(tableReducer, initialState);

  // const timer = useRef<NodeJS.Timer>();

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      // timer.current && clearTimeout(timer.current);
      // timer.current = setTimeout(() => {
      // }, 2000);
      dispatch({
        type: 'updateInputValue',
        payload: { name: e.target.name, value: e.target.value }
      });
    },
    []
  );

  return (
    <TableContext.Provider value={{ tableState, dispatch, handleInputChange }}>
      {children}
    </TableContext.Provider>
  );
};
