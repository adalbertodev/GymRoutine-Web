import React from 'react';
import { Table, TableContainer } from '../../styled-components/Table';
import RoutineBody from './RoutineBody';
import RoutineHead from './RoutineHead';
import { RTable } from '../../models/RTable';

const RoutineTable: React.FC<RTable> = React.memo(({ rows }) => {
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
