import { useEffect, useReducer } from 'react';
import { getExercises } from '../../../services/ExerciseAPI';
import {
  emptyTable,
  tableReducer,
  tableReducerAction
} from '../helpers/tableReducer';
import { RTable } from '../models/RTable';

export interface tableHook {
  table: RTable;
  dispatch: React.Dispatch<tableReducerAction>;
}

export const useTable = (): tableHook => {
  const [table, dispatch] = useReducer(tableReducer, emptyTable);

  useEffect(() => {
    getExercises().then((exercises) => {
      dispatch({
        type: 'addExercises',
        payload: exercises
      });
    });
  }, []);

  return { table, dispatch };
};
