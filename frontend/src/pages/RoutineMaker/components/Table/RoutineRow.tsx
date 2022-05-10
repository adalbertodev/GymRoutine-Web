import { memo } from 'react';
import { Cell } from '../../models/table';
import { TableRow } from '../../styled-components/Table';
import { RoutineCell } from './RoutineCell';

interface RoutineRowProps {
  columns: Cell[];
  row: number;
}

export const RoutineRow: React.FC<RoutineRowProps> = memo(
  ({ columns, row }) => {
    return (
      <TableRow>
        {columns.map((column, i) => (
          <RoutineCell
            key={`Column ${i}`}
            exercise={column.exercise}
            series={column.series}
            repetitions={column.repetitions}
            weight={column.weight}
            cell={{ row: row, column: i }}
          />
        ))}
      </TableRow>
    );
  }
);
