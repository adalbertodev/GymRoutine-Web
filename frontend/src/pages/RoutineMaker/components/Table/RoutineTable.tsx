import React, { useMemo } from 'react';
import { useFetch } from '../../../../hooks/useFetch';
import Exercise, { ExerciseDB } from '../../entities/Exercise';
import { exercisesDBToExercises } from '../../helpers/ExercisesDBToRmExercises';
// import { useFetchExercise } from '../../hooks/useFetchExercise';
import { Table } from '../../styled-components/Table/Table';
import { TableContainer } from '../../styled-components/Table/TableContainer';
import RoutineBody from './RoutineBody';
import RoutineHead from './RoutineHead';

const RoutineTable: React.FC = React.memo(() => {
  const url = process.env.REACT_APP_API_URL + 'exercises';
  const { data } = useFetch(url, 'GET');
  const exercises = useMemo(
    () => (data ? exercisesDBToExercises(data as ExerciseDB[]) : []),
    [data]
  ) as Exercise[];

  // console.log('RoutineTable');

  return (
    <TableContainer>
      <Table id='routineTable'>
        <RoutineHead />
        <RoutineBody exercises={exercises} />
      </Table>
    </TableContainer>
  );
});

export default RoutineTable;
