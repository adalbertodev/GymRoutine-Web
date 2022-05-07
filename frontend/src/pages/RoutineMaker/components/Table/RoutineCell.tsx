import { Autocomplete } from '@mui/material';
import { useContext, useRef } from 'react';
import Exercise from '../../../../models/Exercise';
import {
  StyledCellGrid,
  TableCell,
  StyledTextField
} from '../../styled-components/Table';
import { TableContext } from '../../contexts/TableContext';
import { Cell } from '../../models/Cell';

const RoutineCell: React.FC<Cell> = ({
  exercise,
  series,
  repetitions,
  weight,
  cell
}) => {
  const { table, dispatch } = useContext(TableContext);
  const { exercises } = table;
  const row = cell?.row || 0;
  const column = cell?.column || 0;

  const exerciseInput = useRef<HTMLInputElement>(null);

  const handleAutocompleteChange = (
    e: React.SyntheticEvent<Element, Event>,
    value: string | Exercise
  ) => {
    if (exerciseInput.current) {
      exerciseInput.current.setAttribute('value', (value as Exercise).label);
      let evt = new Event('input', { bubbles: true });
      exerciseInput.current.dispatchEvent(evt);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    dispatch({
      type: 'changeInput',
      payload: { name: e.target.name, value: e.target.value }
    });
  };

  const colorByMuscle = new Map([
    ['Pectoral', '#99ff66'],
    ['Hombros', '#ccff00'],
    ['Tríceps', '#66ffff'],
    ['Espalda', '#00ccff'],
    ['Bíceps', '#33ff99'],
    ['Cuádriceps', '#6666ff'],
    ['Glúteos', '#9900ff'],
    ['Femoral', '#ff33ff'],
    ['Gemelos', '#ff00cc']
  ]);

  const exerciseObject: Exercise =
    exercises?.find((exercises) => exercises.label === exercise) ||
    ({} as Exercise);
  const background: string = colorByMuscle.get(exerciseObject.muscle) || '';

  return (
    <TableCell>
      <StyledCellGrid style={{ backgroundColor: background }}>
        <Autocomplete
          className='autocomplete'
          disableClearable
          freeSolo
          selectOnFocus
          options={exercises ? exercises : []}
          groupBy={(exercise) => exercise.muscle}
          inputValue={exercise}
          onChange={handleAutocompleteChange}
          renderInput={(params) => (
            <StyledTextField
              {...params}
              InputProps={{
                ...params.InputProps,
                inputProps: {
                  ...params.inputProps,
                  style: { padding: 4 }
                }
              }}
              name={`rows.${row}.columns.${column}.exercise`}
              inputRef={exerciseInput}
              variant='standard'
              onChange={handleInputChange}
            />
          )}
        />

        <StyledTextField
          name={`rows.${row}.columns.${column}.series`}
          variant='standard'
          value={series}
          onChange={handleInputChange}
        />

        <StyledTextField
          name={`rows.${row}.columns.${column}.repetitions`}
          variant='standard'
          value={repetitions}
          onChange={handleInputChange}
        />

        <StyledTextField
          name={`rows.${row}.columns.${column}.weight`}
          variant='standard'
          value={weight}
          onChange={handleInputChange}
        />
      </StyledCellGrid>
    </TableCell>
  );
};

export default RoutineCell;
