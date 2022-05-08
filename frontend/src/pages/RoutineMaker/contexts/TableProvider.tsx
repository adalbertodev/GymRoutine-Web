import { ChangeEvent, useCallback, useReducer } from 'react';
import { tableReducer } from '../contexts/tableReducer';
import { emptyTable } from '../helpers/emptyTable';
import { TableProviderProps } from '../models/routineTableProps';
import { TableState } from '../models/table';
import { TableContext } from './TableContext';

const initialState: TableState = {
  table: emptyTable,
  exercises: []
};

export const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  const [tableState, dispatch] = useReducer(tableReducer, initialState);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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
