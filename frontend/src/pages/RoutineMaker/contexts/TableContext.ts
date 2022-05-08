import { createContext } from 'react';
import { TableContextProps } from '../models/routineTableProps';

export const TableContext = createContext<TableContextProps>(
  {} as TableContextProps
);
