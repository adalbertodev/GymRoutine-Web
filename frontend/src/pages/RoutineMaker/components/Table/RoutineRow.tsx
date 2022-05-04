import React from 'react';
import { Row } from '../../models/Row';
import { TableRow } from '../../styled-components/Table';
import RoutineCell from './RoutineCell';

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
