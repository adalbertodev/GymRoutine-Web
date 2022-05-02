import React from 'react';
import { TableRow } from '../../styled-components/Table/TableRow';
import RoutineCell, { Cell } from './RoutineCell';

export interface Row {
  columns: Cell[];
}

const RoutineRow: React.FC<Row> = ({ columns }) => {
  return (
    <TableRow>
      {columns.map((column, i) => (
        <RoutineCell
          key={`Column ${i}`}
          exercise={column.exercise}
          series={column.series}
          repetitions={column.repetitions}
          weight={column.weight}
        />
      ))}
    </TableRow>
  );
};

export default RoutineRow;
