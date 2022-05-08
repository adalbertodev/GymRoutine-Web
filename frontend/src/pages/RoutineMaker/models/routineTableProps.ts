import { ChangeEvent, Dispatch } from 'react';
import { Cell, Row, TableAction, TableState } from './table';

export interface RoutineTableProps {
  rows?: Row[];
}

export interface RoutineRowProps {
  columns: Cell[];
  row: number;
}

export interface RoutineCellProps {
  exercise: string;
  series: string;
  repetitions: string;
  weight: string;
  cell: {
    row: number;
    column: number;
  };
}

export interface TableProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface TableContextProps {
  tableState: TableState;
  dispatch: Dispatch<TableAction>;
  handleInputChange: (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
}
