import { Cell } from './Cell';

export interface Row {
  columns: Cell[];
  row?: number;
}
