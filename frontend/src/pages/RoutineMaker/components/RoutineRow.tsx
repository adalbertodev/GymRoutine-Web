import React from 'react';
import { Exercise } from '../entities/Exercise';
import { TableRow } from '../styled-components/TableRow';
import RoutineColumn, { column } from './RoutineColumn';

interface row {
  columns?: rowCols;
  exercises?: Exercise[];
}

export interface rowCols {
  col1: column;
  col2: column;
  col3: column;
  col4: column;
  col5: column;
}

const RoutineRow: React.FC<row> = (props) => {
  return (
    <TableRow>
      <RoutineColumn columnRow={props.columns?.col1}></RoutineColumn>
      <RoutineColumn columnRow={props.columns?.col2}></RoutineColumn>
      <RoutineColumn columnRow={props.columns?.col3}></RoutineColumn>
      <RoutineColumn columnRow={props.columns?.col4}></RoutineColumn>
      <RoutineColumn columnRow={props.columns?.col5}></RoutineColumn>
    </TableRow>
  );
};

export default RoutineRow;
