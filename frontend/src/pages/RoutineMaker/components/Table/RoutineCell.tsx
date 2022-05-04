import { Autocomplete } from '@mui/material';
import { useContext, useRef } from 'react';
import Exercise from '../../../../models/Exercise';
import { StyledCellGrid } from '../../styled-components/Table/StyledCellGrid';
import { StyledTextField } from '../../styled-components/Table/StyledTextField';
import { TableCell } from '../../styled-components/Table/TableCell';
import { TableContext } from '../../contexts/TableContext';
import { Cell } from '../../models/Cell';

const RoutineCell: React.FC<Cell> = ({
  exercise,
  series,
  repetitions,
  weight,
  cell
}) => {
  const { table, handleChange } = useContext(TableContext);
  const { exercises } = table;
  const row = cell?.row || 0;
  const column = cell?.column || 0;

  const exerciseInput = useRef<HTMLInputElement>(null);

  return (
    <TableCell>
      <StyledCellGrid>
        <Autocomplete
          disableClearable
          freeSolo
          selectOnFocus
          options={exercises ? exercises : []}
          groupBy={(exercise) => exercise.muscle}
          inputValue={exercise}
          onChange={(e, value) => {
            if (exerciseInput.current) {
              exerciseInput.current.setAttribute(
                'value',
                (value as Exercise).label
              );
              let evt = new Event('input', { bubbles: true });
              exerciseInput.current.dispatchEvent(evt);
            }

            // console.log(exerciseInput.current.dispatchEvent(evt));
          }}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              name={`rows.${row}.columns.${column}.exercise`}
              inputRef={exerciseInput}
              variant='standard'
              onChange={handleChange}
            />
          )}
        />

        <StyledTextField
          name={`rows.${row}.columns.${column}.series`}
          variant='standard'
          value={series}
          onChange={handleChange}
        />

        <StyledTextField
          name={`rows.${row}.columns.${column}.repetitions`}
          variant='standard'
          value={repetitions}
          onChange={handleChange}
        />

        <StyledTextField
          name={`rows.${row}.columns.${column}.weight`}
          variant='standard'
          value={weight}
          onChange={handleChange}
        />
      </StyledCellGrid>
    </TableCell>
  );
};

export default RoutineCell;
