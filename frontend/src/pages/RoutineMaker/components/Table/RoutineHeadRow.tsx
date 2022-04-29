import React from 'react';
import { HeadRow } from '../../entities/Row';
import { TableHeadCell } from '../../styled-components/Table/TableHeadCell';
import { TableRow } from '../../styled-components/Table/TableRow';

const RoutineHeadRow: React.FC<HeadRow> = ({
  column1,
  column2,
  column3,
  column4,
  column5
}) => {
  return (
    <TableRow>
      <TableHeadCell key={1}>{column1}</TableHeadCell>
      <TableHeadCell key={2}>{column2}</TableHeadCell>
      <TableHeadCell key={3}>{column3}</TableHeadCell>
      <TableHeadCell key={4}>{column4}</TableHeadCell>
      <TableHeadCell key={5}>{column5}</TableHeadCell>
    </TableRow>
  );
};

export default RoutineHeadRow;
