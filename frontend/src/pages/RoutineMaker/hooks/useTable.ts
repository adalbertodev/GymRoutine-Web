import { useContext, useEffect } from 'react';
import { getExercises } from '../../../services/ExerciseAPI';
import { TableContext } from '../contexts/TableContext';

export const useTable = () => {
  const { tableState, dispatch, handleInputChange } = useContext(TableContext);
  const { table } = tableState;

  useEffect(() => {
    getExercises().then((exercises) => {
      dispatch({
        type: 'setExercises',
        payload: exercises
      });
    });
  }, [dispatch]);

  return { tableState, table, dispatch, handleInputChange };
};
