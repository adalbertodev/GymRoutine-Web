import { Autocomplete } from '@mui/material';
import { StyledCellGrid } from '../styled-components/Table/StyledCellGrid';
import { StyledTextField } from '../styled-components/Table/StyledTextField';
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
      <StyledCellGrid>
        <Autocomplete
          id='disable-close-on-select'
          disableClearable
          freeSolo
          selectOnFocus
          options={options}
          groupBy={(option) => option.muscle}
          renderInput={(params) => (
            <StyledTextField {...params} variant='standard' />
          )}
        />

        <StyledTextField
          variant='standard'
          // value={
          //   props.columnRow?.series !== undefined ? props.columnRow.series : ''
          // }
        />

        <StyledTextField
          variant='standard'
          // value={
          //   props.columnRow?.repetitions !== undefined
          //     ? props.columnRow.repetitions
          //     : ''
          // }
        />

        <StyledTextField
          variant='standard'
          // value={
          //   props.columnRow?.repetitions !== undefined
          //     ? props.columnRow.weight + ' kg'
          //     : ''
          // }
        />
      </StyledCellGrid>
    </TableCell>
  );
};

export default RoutineColumn;
