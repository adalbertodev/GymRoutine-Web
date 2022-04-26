import React from 'react';
// import { getExercises } from '../ExerciseAPI';
import { Table } from '../styled-components/Table/Table';
import { TableBody } from '../styled-components/Table/TableBody';
import { TableContainer } from '../styled-components/Table/TableContainer';
import { TableHead } from '../styled-components/Table/TableHead';
import { TableHeadCell } from '../styled-components/Table/TableHeadCell';
import { TableRow } from '../styled-components/Table/TableRow';
import RoutineColumnHead from './RoutineColumnHead';
import RoutineRow from './RoutineRow';

const RoutineTable: React.FC = () => {
  // const exercises = async () => {
  //   console.log(await getExercises());
  // };

  // exercises();

  return (
    <TableContainer>
      <Table id='rutineTable'>
        <TableHead>
          <TableRow>
            <TableHeadCell>Lunes</TableHeadCell>
            <TableHeadCell>Martes</TableHeadCell>
            <TableHeadCell>Miércoles</TableHeadCell>
            <TableHeadCell>Jueves</TableHeadCell>
            <TableHeadCell>Viernes</TableHeadCell>
          </TableRow>
          <RoutineColumnHead />
        </TableHead>

        <TableBody>
          <RoutineRow />
          <RoutineRow />
          <RoutineRow />
          <RoutineRow />
          <RoutineRow />
          <RoutineRow />
          <RoutineRow />
          <RoutineRow />
          <RoutineRow />
          <RoutineRow />
          <RoutineRow />
          <RoutineRow />
          <RoutineRow />
          <RoutineRow />
          <RoutineRow />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RoutineTable;
