import React from 'react';
import { TableBody } from '../../styled-components/Table/TableBody';
import RoutineRow from './RoutineRow';
import { Body } from '../../models/Body';

const RoutineBody: React.FC<Body> = ({ rows }) => {
  return (
    <TableBody>
      {rows.map((row, i) => (
        <RoutineRow key={`Row ${i + 1}`} columns={row.columns} row={i} />
      ))}
    </TableBody>
  );
};

export default RoutineBody;
