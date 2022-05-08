import { ChangeEvent, useCallback, useEffect, useReducer } from 'react';
import { getExercises } from '../../../services/ExerciseAPI';
import { tableReducer } from '../contexts/tableReducer';
import { emptyTable } from '../helpers/emptyTable';
import { RTable, TableAction, TableState } from '../models/table';

export interface tableHook {
  table: RTable;
  dispatch: React.Dispatch<TableAction>;
}

const initialState: TableState = {
  table: emptyTable,
  exercises: []
};

export const useTable = () => {
  const [tableState, dispatch] = useReducer(tableReducer, initialState);
  const { table } = tableState;

  useEffect(() => {
    getExercises().then((exercises) => {
      dispatch({
        type: 'setExercises',
        payload: exercises
      });
    });
  }, []);

  const handleInputChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      console.log('a');
      dispatch({
        type: 'updateInputValue',
        payload: { name: e.target.name, value: e.target.value }
      });
    },
    []
  );

  return { tableState, table, dispatch, handleInputChange };
};
