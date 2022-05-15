import Exercise from '../../../models/Exercise';
import RmExercise from '../../../models/RmExercise';

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
  | { type: 'setExercises'; payload: Exercise[] }
  | { type: 'changeDifficulty'; payload: number }
  | { type: 'updateInputValue'; payload: InputData }
  | { type: 'setTable'; payload: RTable }
  | { type: 'updateRmFields'; payload: RmExercise[] };

export interface TableState {
  table: RTable;
  exercises: Exercise[];
  difficulty: number;
}
