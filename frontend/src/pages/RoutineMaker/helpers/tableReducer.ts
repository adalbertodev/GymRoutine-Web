import { Cell } from '../models/Cell';
import { Row } from '../models/Row';
import { RTable } from '../models/RTable';
import Exercise from '../../../models/Exercise';
import RmExercise from '../../../models/RmExercise';
import { changeInput, introduceRM } from './tableReducerActions';

export interface tableReducerAction {
  type: string;
  payload: RmExercise[] | Exercise[] | { name: string; value: string };
}

export const tableReducer = (
  table = emptyTable,
  action: tableReducerAction
) => {
  switch (action.type) {
    case 'addRow':
      return {
        ...table,
        rows: [...table.rows, emptyRow]
      };

    case 'addExercises':
      return {
        ...table,
        exercises: action.payload as Exercise[]
      };

    case 'changeInput':
      return changeInput(table, action);

    case 'calculateRm':
      return introduceRM(table, action);

    default:
      return table;
  }
};

const emptyCell: Cell = {
  exercise: '',
  series: '',
  repetitions: '',
  weight: ''
};

const emptyRow: Row = {
  columns: [emptyCell, emptyCell, emptyCell, emptyCell, emptyCell]
};

export const emptyTable: RTable = {
  rows: [emptyRow],
  exercises: []
};
