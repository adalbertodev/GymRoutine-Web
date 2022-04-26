import React from 'react';
import { Row } from '../entities/Row';
import { TableRow } from '../styled-components/Table/TableRow';
import RoutineCell from './RoutineCell';

const RoutineRow: React.FC<Row> = ({
  columnsCount,
  column1,
  column2,
  column3,
  column4,
  column5,
  exercises
}) => {
  const cells = [];

  const columns = [column1, column2, column3, column4, column5];

  for (let i = 0; i < columnsCount; i++) {
    cells[i] = (
      <RoutineCell
        key={i}
        exercise={
          columns[i]?.exercise !== undefined ? columns[i]?.exercise : ''
        }
        series={columns[i]?.series !== undefined ? columns[i]?.series : ''}
        repetitions={
          columns[i]?.repetitions !== undefined ? columns[i]?.repetitions : ''
        }
        weight={columns[i]?.weight !== undefined ? columns[i]?.weight : ''}
        exercises={exercises !== undefined ? exercises : []}
      />
    );
  }

  return <TableRow>{cells}</TableRow>;
};

export default RoutineRow;
