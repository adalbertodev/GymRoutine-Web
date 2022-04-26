import React from 'react';
import { Table } from '../entities/Table';
import { TableBody } from '../styled-components/Table/TableBody';
import RoutineRow from './RoutineRow';

const RoutineBody: React.FC<Table> = ({ exercises }) => {
  return (
    <TableBody>
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
      <RoutineRow columnsCount={5} exercises={exercises} />
    </TableBody>
  );
};

export default RoutineBody;
