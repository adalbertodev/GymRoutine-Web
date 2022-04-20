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

const headers = [header, header, header, header, header];

const RoutineColumnHead: React.FC = () => {
  return (
    <TableRow>
      {headers.map((header) => {
        return (
          <TableCol>
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
