import { ChangeEvent, useCallback, useReducer } from 'react';
import { tableReducer } from '../contexts/tableReducer';
import { emptyTable } from '../utils/emptyTable';
import { TableContext } from './TableContext';

export interface TableProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  const [tableState, dispatch] = useReducer(tableReducer, {
    table: emptyTable,
    exercises: []
  });

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
