import React from 'react';
import { StyledCellGrid } from '../styled-components/Table/StyledCellGrid';
import { TableHeadCell } from '../styled-components/Table/TableHeadCell';
import { TableRow } from '../styled-components/Table/TableRow';

const header = {
  col1: 'Ejercicio',
  col2: 'S',
  col3: 'R',
  col4: 'P'
};

const headers = [1, 2, 3, 4, 5];

const RoutineColumnHead: React.FC = () => {
  return (
    <TableRow>
      {headers.map((id) => {
        return (
          <th key={id}>
            <StyledCellGrid>
              <TableHeadCell>{header.col1}</TableHeadCell>
              <TableHeadCell>{header.col2}</TableHeadCell>
              <TableHeadCell>{header.col3}</TableHeadCell>
              <TableHeadCell>{header.col4}</TableHeadCell>
            </StyledCellGrid>
          </th>
        );
      })}
    </TableRow>
  );
};

export default RoutineColumnHead;
