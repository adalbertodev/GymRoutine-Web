import { Cell, Row, RTable } from '../models/table';

export const emptyCell: Cell = {
  exercise: '',
  series: '',
  repetitions: '',
  weight: ''
};

export const emptyRow: Row = {
  columns: [emptyCell, emptyCell, emptyCell, emptyCell, emptyCell]
};

export const emptyTable: RTable = {
  rows: [emptyRow]
};
