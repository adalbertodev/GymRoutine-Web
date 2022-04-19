import React from 'react';
import { TableCol } from '../styled-components/TableCol';
import { TableHead } from '../styled-components/TableHead';
import { TableRow } from '../styled-components/TableRow';

const header = {
  col1: 'Ejercicio',
  col2: 'S',
  col3: 'R',
  col4: 'P'
};

const headers = [header, header, header, header, header];

const RutineColumnHead: React.FC = () => {
  return (
    <TableRow>
      {headers.map((header) => {
        return (
          <TableCol>
            <TableHead>{header.col1}</TableHead>
            <TableHead>{header.col2}</TableHead>
            <TableHead>{header.col3}</TableHead>
            <TableHead>{header.col4}</TableHead>
          </TableCol>
        );
      })}
    </TableRow>
  );
};

export default RutineColumnHead;
