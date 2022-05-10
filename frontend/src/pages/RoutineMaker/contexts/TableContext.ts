import { ChangeEvent, createContext, Dispatch } from 'react';
import { TableAction, TableState } from '../models/table';

export interface TableContextProps {
  tableState: TableState;
  dispatch: Dispatch<TableAction>;
  handleInputChange: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}

export const TableContext = createContext<TableContextProps>(
  {} as TableContextProps
);
