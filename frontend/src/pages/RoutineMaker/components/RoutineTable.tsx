import { memo } from 'react';
import { useTable } from '../hooks/useTable';
import { Table, TableBody, TableContainer } from '../styled-components/Table';
import { RoutineHead } from './Table/RoutineHead';
import { RoutineRow } from './Table/RoutineRow';

export const RoutineTable: React.FC = memo(() => {
  const { table } = useTable();

  return (
    <TableContainer>
      <Table id='routineTable'>
        <RoutineHead />

        <TableBody>
          {table.rows.map((row, i) => (
            <RoutineRow key={`Row ${i + 1}`} columns={row.columns} row={i} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
