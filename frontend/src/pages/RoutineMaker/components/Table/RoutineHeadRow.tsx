import React from 'react';
import { TableHeadCell } from '../../styled-components/Table/TableHeadCell';
import { TableRow } from '../../styled-components/Table/TableRow';

export interface HeadRow {
  column1: JSX.Element;
  column2: JSX.Element;
  column3: JSX.Element;
  column4: JSX.Element;
  column5: JSX.Element;
}

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
