import React, { useContext, useEffect, useMemo } from 'react';
import { useFetch } from '../../../../hooks/useFetch';
import Exercise from '../../../../models/Exercise';
import EndpointExercise from '../../../../models/EndpointExercise';
import { exercisesDBToExercises } from '../../helpers/ExercisesDBToRmExercises';
// import { useFetchExercise } from '../../hooks/useFetchExercise';
import { Table, TableContainer } from '../../styled-components/Table';
import { TableContext } from '../../contexts/TableContext';
import RoutineBody from './RoutineBody';
import RoutineHead from './RoutineHead';
import { RTable } from '../../models/RTable';

const RoutineTable: React.FC<RTable> = React.memo(({ rows }) => {
  const url = process.env.REACT_APP_API_URL + 'exercises';
  const { data } = useFetch(url, 'GET');
  const exercises = useMemo(
    () => (data ? exercisesDBToExercises(data as EndpointExercise[]) : []),
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
