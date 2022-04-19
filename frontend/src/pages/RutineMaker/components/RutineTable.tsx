import React from 'react';
import { Table } from '../styled-components/Table';
import { TableHead } from '../styled-components/TableHead';
import { TableRow } from '../styled-components/TableRow';
import RutineColumnHead from './RutineColumnHead';
import RutineRow, { rowCols } from './RutineRow';

const RutineTable: React.FC = () => {
  const row1: rowCols = {
    col1: {
      exercise: 'Press',
      series: '1',
      repetitions: '10',
      weight: '20'
    },
    col2: {
      exercise: 'Press',
      series: '1',
      repetitions: '10',
      weight: '20'
    },
    col3: {
      exercise: 'Press',
      series: '1',
      repetitions: '10',
      weight: '20'
    },
    col4: {
      exercise: 'Press',
      series: '1',
      repetitions: '10',
      weight: '20'
    },
    col5: {
      exercise: 'Press',
      series: '1',
      repetitions: '10',
      weight: '20'
    }
  };

  return (
    <Table id='rutineTable'>
      <TableRow>
        <TableHead>Lunes</TableHead>
        <TableHead>Martes</TableHead>
        <TableHead>Miercoles</TableHead>
        <TableHead>Jueves</TableHead>
        <TableHead>Viernes</TableHead>
      </TableRow>
      <RutineColumnHead />
      <RutineRow columns={row1}></RutineRow>
      <RutineRow columns={row1}></RutineRow>
    </Table>
  );
};

export default RutineTable;
