import React from 'react';
import { RoutineTableProps } from '../../models/routineTableProps';
import { Table, TableContainer } from '../../styled-components/Table';
import RoutineBody from './RoutineBody';
import RoutineHead from './RoutineHead';

const RoutineTable: React.FC<RoutineTableProps> = React.memo(({ rows }) => {
  console.log(rows);

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
