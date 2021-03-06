import Exercise from '../../../models/Exercise';
import { emptyRow } from '../utils/emptyTable';
import { RTable, TableAction } from '../models/table';

export const addEmptyRow = (): TableAction => {
  return {
    type: 'addRow',
    payload: { ...emptyRow }
  };
};

export const deleteLastRow = (): TableAction => {
  return {
    type: 'deleteRow'
  };
};

export const setExercises = (exercises: Exercise[]): TableAction => {
  return {
    type: 'setExercises',
    payload: exercises
  };
};

export const changeDifficulty = (newDfficulty: number): TableAction => {
  return {
    type: 'changeDifficulty',
    payload: newDfficulty
  };
};

export const setTable = (table: RTable): TableAction => {
  return {
    type: 'setTable',
    payload: { ...table }
  };
};

export const updateInputValue = (inputData: {
  name: string;
  value: string;
}): TableAction => {
  return {
    type: 'updateInputValue',
    payload: inputData
  };
};

export const updateRmFields = (): TableAction => {
  return {
    type: 'updateRmFields'
  };
};
