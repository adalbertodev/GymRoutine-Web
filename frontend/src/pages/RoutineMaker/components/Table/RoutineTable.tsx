import React from 'react';
import { useFetchExercise } from '../../hooks/useFetchExercise';
import { Table } from '../../styled-components/Table/Table';
import { TableContainer } from '../../styled-components/Table/TableContainer';
import RoutineBody from './RoutineBody';
import RoutineHead from './RoutineHead';

const RoutineTable: React.FC = () => {
  const url = process.env.REACT_APP_API_URL + 'exercises';
  const { exercises } = useFetchExercise(url, 'GET');

  return (
    <TableContainer>
      <Table id='routineTable'>
        <RoutineHead />
        <RoutineBody exercises={exercises} />
      </Table>
    </TableContainer>
  );
};

export default RoutineTable;
