import React from 'react';
import { Table } from '../styled-components/Table';
import { TableHead } from '../styled-components/TableHead';
import { TableRow } from '../styled-components/TableRow';
import RoutineColumnHead from './RoutineColumnHead';
import RoutineRow from './RoutineRow';

const RoutineTable: React.FC = () => {
  return (
    <Table id='rutineTable'>
      <TableRow>
        <TableHead>Lunes</TableHead>
        <TableHead>Martes</TableHead>
        <TableHead>Miercoles</TableHead>
        <TableHead>Jueves</TableHead>
        <TableHead>Viernes</TableHead>
      </TableRow>

      <RoutineColumnHead />

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
    </Table>
  );
};

export default RoutineTable;
