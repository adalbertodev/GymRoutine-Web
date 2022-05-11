import { useContext, useEffect } from 'react';
import { getExercises } from '../../../services/ExerciseAPI';
import { setExercises } from '../contexts/tableActions';
import { TableContext } from '../contexts/TableContext';

export const useTable = () => {
  const tableContext = useContext(TableContext);
  const { tableState, dispatch } = tableContext;
  const { table } = tableState;

  useEffect(() => {
    getExercises().then((exercises) => {
      dispatch(setExercises(exercises));
    });
  }, [dispatch]);

  return { ...tableContext, table };
};
