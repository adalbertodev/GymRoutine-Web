import { Autocomplete } from '@mui/material';
import { memo, useCallback, useEffect, useMemo, useRef } from 'react';
import Exercise from '../../../../models/Exercise';
import {
  StyledCellGrid,
  TableCell,
  StyledTextField
} from '../../styled-components/Table';
import { RoutineCellProps } from '../../models/routineTableProps';
import { useTable } from '../../hooks/useTable';

const RoutineCell: React.FC<RoutineCellProps> = memo(
  ({ exercise, series, repetitions, weight, cell }) => {
    const { tableState, handleInputChange } = useTable();
    const { exercises } = tableState;
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

    const colorByMuscle = useMemo(
      () =>
        new Map([
          ['Pectoral', '#99ff66'],
          ['Hombros', '#ccff00'],
          ['Tríceps', '#66ffff'],
          ['Espalda', '#00ccff'],
          ['Bíceps', '#33ff99'],
          ['Cuádriceps', '#6666ff'],
          ['Glúteos', '#9900ff'],
          ['Femoral', '#ff33ff'],
          ['Gemelos', '#ff00cc']
        ]),
      []
    );

    const styledCell = useRef<HTMLDivElement | null>(null);

    const handleChangeInputColor = useCallback(() => {
      if (styledCell.current) {
        const exerciseObject: Exercise =
          exercises?.find((exercises) => exercises.label === exercise) ||
          ({} as Exercise);
        const background: string =
          colorByMuscle.get(exerciseObject.muscle) || '';

        styledCell.current.style.backgroundColor = background;
      }
    }, [colorByMuscle, exercise, exercises]);

    useEffect(() => {
      handleChangeInputColor();
    }, [handleChangeInputColor]);

    return (
      <TableCell>
        <StyledCellGrid ref={styledCell}>
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
  }
);

export default RoutineCell;
