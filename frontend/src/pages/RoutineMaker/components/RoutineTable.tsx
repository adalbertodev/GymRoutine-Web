import { memo } from 'react';
import { Row } from '../models/table';
import { Table, TableBody, TableContainer } from '../styled-components/Table';
import { RoutineHead } from './Table/RoutineHead';
import { RoutineRow } from './Table/RoutineRow';

interface RoutineTableProps {
  rows: Row[];
}

export const RoutineTable: React.FC<RoutineTableProps> = memo(({ rows }) => {
  return (
    <TableContainer>
      <Table id='routineTable'>
        <RoutineHead />

        <TableBody>
          {rows.map((row, i) => (
            <RoutineRow key={`Row ${i + 1}`} columns={row.columns} row={i} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
