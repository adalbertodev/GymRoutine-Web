import Exercise from '../../../models/Exercise';

export interface Cell {
  exercise: string;
  series: string;
  repetitions: string;
  weight: string;
}

export interface Row {
  columns: Cell[];
}

export interface RTable {
  rows: Row[];
}

export interface Template {
  table: RTable;
  name: string;
}

export interface InputData {
  name: string;
  value: string;
}

export type TableAction =
  | { type: 'addRow'; payload: Row }
  | { type: 'deleteRow' }
  | { type: 'setExercises'; payload: Exercise[] }
  | { type: 'changeDifficulty'; payload: number }
  | { type: 'updateInputValue'; payload: InputData }
  | { type: 'setTable'; payload: RTable }
  | { type: 'updateRmFields' };

export interface TableState {
  table: RTable;
  exercises: Exercise[];
  difficulty: number;
}
