import React from 'react';
import { TableCol } from '../styled-components/TableCol';
import { TableHeader } from '../styled-components/TableHeader';
import { TableRow } from '../styled-components/TableRow';

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
          <TableCol key={id}>
            <TableHeader>{header.col1}</TableHeader>
            <TableHeader>{header.col2}</TableHeader>
            <TableHeader>{header.col3}</TableHeader>
            <TableHeader>{header.col4}</TableHeader>
          </TableCol>
        );
      })}
    </TableRow>
  );
};

export default RoutineColumnHead;
