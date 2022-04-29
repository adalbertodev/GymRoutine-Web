import { Autocomplete } from '@mui/material';
import { Cell } from '../../entities/Cell';
import { StyledCellGrid } from '../../styled-components/Table/StyledCellGrid';
import { StyledTextField } from '../../styled-components/Table/StyledTextField';
import { TableCell } from '../../styled-components/Table/TableCell';

const RoutineCell: React.FC<Cell> = ({
  exercise,
  series,
  repetitions,
  weight,
  exercises: options
}) => {
  return (
    <TableCell>
      <StyledCellGrid>
        <Autocomplete
          id='disable-close-on-select'
          disableClearable
          freeSolo
          selectOnFocus
          options={options ? options : []}
          groupBy={(option) => option.muscle}
          defaultValue={exercise !== undefined ? exercise : ''}
          renderInput={(params) => (
            <StyledTextField {...params} variant='standard' />
          )}
        />

        <StyledTextField
          id='seriesInput'
          variant='standard'
          defaultValue={series ? series : ''}
        />

        <StyledTextField
          variant='standard'
          defaultValue={repetitions ? repetitions : ''}
        />

        <StyledTextField
          variant='standard'
          defaultValue={weight ? weight : ''}
        />
      </StyledCellGrid>
    </TableCell>
  );
};

export default RoutineCell;
