import { useContext } from 'react';
import { TableContext } from '../contexts/TableContext';

export const useTable = () => {
  const tableContext = useContext(TableContext);
  const { tableState } = tableContext;
  const { table } = tableState;

  return { ...tableContext, table };
};
