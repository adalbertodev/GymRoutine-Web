import React from 'react';
import { Exercise } from '../entities/Exercise';
import { TableRow } from '../styled-components/TableRow';
import RutineColumn, { column } from './RutineColumn';

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

const RutineRow: React.FC<row> = (props) => {
  return (
    <TableRow>
      <RutineColumn columnRow={props.columns?.col1}></RutineColumn>
      <RutineColumn columnRow={props.columns?.col2}></RutineColumn>
      <RutineColumn columnRow={props.columns?.col3}></RutineColumn>
      <RutineColumn columnRow={props.columns?.col4}></RutineColumn>
      <RutineColumn columnRow={props.columns?.col5}></RutineColumn>
    </TableRow>
  );
};

export default RutineRow;
