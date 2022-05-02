import React, { useContext, useEffect, useMemo } from 'react';
import { useFetch } from '../../../../hooks/useFetch';
import Exercise, { ExerciseDB } from '../../entities/Exercise';
import { exercisesDBToExercises } from '../../helpers/ExercisesDBToRmExercises';
// import { useFetchExercise } from '../../hooks/useFetchExercise';
import { Table } from '../../styled-components/Table/Table';
import { TableContainer } from '../../styled-components/Table/TableContainer';
import { TableContext } from '../TableContext';
import RoutineBody from './RoutineBody';
import RoutineHead from './RoutineHead';
import { Row } from './RoutineRow';

export interface RTable {
  rows: Row[];
  exercises?: Exercise[];
}

const RoutineTable: React.FC<RTable> = React.memo(({ rows }) => {
  const url = process.env.REACT_APP_API_URL + 'exercises';
  const { data } = useFetch(url, 'GET');
  const exercises = useMemo(
    () => (data ? exercisesDBToExercises(data as ExerciseDB[]) : []),
    [data]
  ) as Exercise[];

  const { dispatch } = useContext(TableContext);

  useEffect(() => {
    dispatch({
      type: 'addExercises',
      payload: exercises
    });
  }, [dispatch, exercises]);

  // console.log('RoutineTable');

  return (
    <TableContainer>
      <Table id='routineTable'>
        <RoutineHead />
        <RoutineBody rows={rows} />
      </Table>
    </TableContainer>
  );
});

export default RoutineTable;
