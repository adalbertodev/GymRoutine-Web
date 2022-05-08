import { Cell, Row } from './table';

export interface RoutineTableProps {
  rows: Row[];
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
