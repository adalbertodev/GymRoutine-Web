import { Autocomplete } from '@mui/material';
import { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import { StyledCellGrid } from '../../styled-components/Table/StyledCellGrid';
import { StyledTextField } from '../../styled-components/Table/StyledTextField';
import { TableCell } from '../../styled-components/Table/TableCell';
import { TableContext } from '../TableContext';

export interface Cell {
  exercise: string;
  series: string;
  repetitions: string;
  weight: string;
}

const RoutineCell: React.FC<Cell> = (props) => {
  const { formData, handleInputChange } = useForm(props);
  const { table } = useContext(TableContext);
  const { exercises } = table;

  const { exercise, series, repetitions, weight } = formData;

  return (
    <TableCell>
      <StyledCellGrid>
        <Autocomplete
          disableClearable
          freeSolo
          selectOnFocus
          options={exercises ? exercises : []}
          groupBy={(exercise) => exercise.muscle}
          value={exercise}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              name='exercise'
              variant='standard'
              onChange={handleInputChange}
            />
          )}
        />

        <StyledTextField
          name='series'
          variant='standard'
          value={series}
          onChange={handleInputChange}
        />

        <StyledTextField
          name='repetitions'
          variant='standard'
          value={repetitions}
          onChange={handleInputChange}
        />

        <StyledTextField
          name='weight'
          variant='standard'
          value={weight}
          onChange={handleInputChange}
        />
      </StyledCellGrid>
    </TableCell>
  );
};

export default RoutineCell;
