import { TextField, Autocomplete } from '@mui/material';
import { TableCell } from '../styled-components/Table/TableCell';

interface columnRow {
  columnRow?: column;
}

export interface column {
  exercise?: string;
  series?: string;
  repetitions?: string;
  weight?: string;
}

const RoutineColumn: React.FC<columnRow> = (props) => {
  const options = [
    { label: 'Press Banca', id: 1, muscle: 'Pectoral' },
    { label: 'Dominadas', id: 2, muscle: 'Espalda' },
    { label: 'Peso Muerto', id: 3, muscle: 'Piernas' },
    { label: 'Sentadillas', id: 4, muscle: 'Piernas' }
  ];

  return (
    <TableCell>
      <div className='StyledCellGrid'>
        <Autocomplete
          id='disable-close-on-select'
          disableClearable
          freeSolo
          selectOnFocus
          options={options}
          groupBy={(option) => option.muscle}
          renderInput={(params) => <TextField {...params} variant='standard' />}
        />

        <TextField
          variant='standard'
          // value={
          //   props.columnRow?.series !== undefined ? props.columnRow.series : ''
          // }
        />

        <TextField
          variant='standard'
          // value={
          //   props.columnRow?.repetitions !== undefined
          //     ? props.columnRow.repetitions
          //     : ''
          // }
        />

        <TextField
          variant='standard'
          // value={
          //   props.columnRow?.repetitions !== undefined
          //     ? props.columnRow.weight + ' kg'
          //     : ''
          // }
        />
      </div>
    </TableCell>
  );
};

export default RoutineColumn;
