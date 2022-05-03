import React from 'react';
import { TableRow } from '../../styled-components/Table/TableRow';
import RoutineCell, { Cell } from './RoutineCell';

export interface Row {
  columns: Cell[];
  row?: number;
}

const RoutineRow: React.FC<Row> = ({ columns, row }) => {
  const currentRow = row || 0;

  return (
    <TableRow>
      {columns.map((column, i) => (
        <RoutineCell
          key={`Column ${i}`}
          exercise={column.exercise}
          series={column.series}
          repetitions={column.repetitions}
          weight={column.weight}
          cell={{ row: currentRow, column: i }}
        />
      ))}
    </TableRow>
  );
};

export default RoutineRow;
