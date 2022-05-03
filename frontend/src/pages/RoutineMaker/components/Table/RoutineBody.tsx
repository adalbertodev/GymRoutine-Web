import React from 'react';
import { TableBody } from '../../styled-components/Table/TableBody';
import RoutineRow, { Row } from './RoutineRow';

export interface TBody {
  rows: Row[];
}

const RoutineBody: React.FC<TBody> = ({ rows }) => {
  return (
    <TableBody>
      {rows.map((row, i) => (
        <RoutineRow key={`Row ${i + 1}`} columns={row.columns} row={i} />
      ))}
    </TableBody>
  );
};

export default RoutineBody;
