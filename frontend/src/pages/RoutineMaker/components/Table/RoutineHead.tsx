import React from 'react';
import { StyledCellGrid } from '../../styled-components/Table/StyledCellGrid';
import { TableHead } from '../../styled-components/Table/TableHead';
import RoutineHeadRow from './RoutineHeadRow';

export interface HeadRow {
  column1: JSX.Element;
  column2: JSX.Element;
  column3: JSX.Element;
  column4: JSX.Element;
  column5: JSX.Element;
}

export interface HeadCell {
  content: JSX.Element;
}

const RoutineHead: React.FC = () => {
  const semanalDays: HeadRow = {
    column1: <>Lunes</>,
    column2: <>Martes</>,
    column3: <>Miércoles</>,
    column4: <>Jueves</>,
    column5: <>Viernes</>
  };

  const subSeccions: HeadCell = {
    content: (
      <StyledCellGrid>
        <div>{'Ejercicio'}</div>
        <div>{'S'}</div>
        <div>{'R'}</div>
        <div>{'P'}</div>
      </StyledCellGrid>
    )
  };

  return (
    <TableHead>
      <RoutineHeadRow
        column1={semanalDays.column1}
        column2={semanalDays.column2}
        column3={semanalDays.column3}
        column4={semanalDays.column4}
        column5={semanalDays.column5}
      />
      <RoutineHeadRow
        column1={subSeccions.content}
        column2={subSeccions.content}
        column3={subSeccions.content}
        column4={subSeccions.content}
        column5={subSeccions.content}
      />
    </TableHead>
  );
};

export default RoutineHead;
