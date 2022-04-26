import { Cell } from './Cell';
import Exercise from './Exercise';

export interface Row {
  columnsCount: number;
  column1?: Cell;
  column2?: Cell;
  column3?: Cell;
  column4?: Cell;
  column5?: Cell;
  exercises?: Exercise[];
}

export interface Table {
  exercises?: Exercise[];
}
