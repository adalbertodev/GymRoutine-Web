import { Cell } from './Cell';
import Exercise from './Exercise';

export interface HeadRow {
  column1: JSX.Element;
  column2: JSX.Element;
  column3: JSX.Element;
  column4: JSX.Element;
  column5: JSX.Element;
}

export interface Row {
  columnsCount: number;
  column1?: Cell;
  column2?: Cell;
  column3?: Cell;
  column4?: Cell;
  column5?: Cell;
  exercises?: Exercise[];
}
