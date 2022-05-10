import { memo, useMemo } from 'react';
import {
  StyledCellGrid,
  TableHead,
  TableHeadCell,
  TableRow
} from '../../styled-components/Table';

export const RoutineHead: React.FC = memo(() => {
  const headerDays = useMemo(
    () => ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'],
    []
  );

  const headerColumns = useMemo(() => ['Ejercicio', 'S', 'R', 'P'], []);

  return (
    <TableHead>
      <TableRow>
        {headerDays.map((column, i) => (
          <TableHeadCell key={'DAYS' + i}>{column}</TableHeadCell>
        ))}
      </TableRow>

      <TableRow>
        {headerDays.map((column, i) => (
          <TableHeadCell key={'HC' + i}>
            <StyledCellGrid>
              {headerColumns.map((hColumn, i) => (
                <div key={'C' + column + i}>{hColumn}</div>
              ))}
            </StyledCellGrid>
          </TableHeadCell>
        ))}
      </TableRow>
    </TableHead>
  );
});
