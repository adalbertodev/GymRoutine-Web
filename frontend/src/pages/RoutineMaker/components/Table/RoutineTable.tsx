import React from 'react';
import { useTable } from '../../hooks/useTable';
import { RoutineTableProps } from '../../models/routineTableProps';
import { Table, TableContainer } from '../../styled-components/Table';
import RoutineBody from './RoutineBody';
import RoutineHead from './RoutineHead';

const RoutineTable: React.FC<RoutineTableProps> = React.memo(({ rows }) => {
  const { table } = useTable();

  return (
    <TableContainer>
      <Table id='routineTable'>
        <RoutineHead />
        <RoutineBody rows={table.rows} />
      </Table>
    </TableContainer>
  );
});

export default RoutineTable;
