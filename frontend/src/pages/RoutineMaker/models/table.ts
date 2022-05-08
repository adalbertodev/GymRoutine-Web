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

export interface InputData {
  name: string;
  value: string;
}

export type TableAction =
  | { type: 'addRow' }
  | { type: 'setExercises'; payload: Exercise[] }
  | { type: 'updateInputValue'; payload: InputData }
  | { type: 'setTable'; payload: RTable }
  | { type: 'calculateRm'; payload: RmExercise[] };

export interface TableState {
  table: RTable;
  exercises: Exercise[];
}
