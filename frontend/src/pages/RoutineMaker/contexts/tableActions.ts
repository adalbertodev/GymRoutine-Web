import Exercise from '../../../models/Exercise';
import { emptyRow } from '../utils/emptyTable';
import { RTable, TableAction } from '../models/table';
import RmExercise from '../../../models/RmExercise';

export const addEmptyRow = (): TableAction => {
  return {
    type: 'addRow',
    payload: emptyRow
  };
};

export const setExercises = (exercises: Exercise[]): TableAction => {
  return {
    type: 'setExercises',
    payload: exercises
  };
};

export const setTable = (table: RTable): TableAction => {
  return {
    type: 'setTable',
    payload: table
  };
};

export const updateInputValue = (table: RTable): TableAction => {
  return {
    type: 'setTable',
    payload: table
  };
};

export const updateRmFields = (rmExercises: RmExercise[]): TableAction => {
  return {
    type: 'updateRmFields',
    payload: rmExercises
  };
};
