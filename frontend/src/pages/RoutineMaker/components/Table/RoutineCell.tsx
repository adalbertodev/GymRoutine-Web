import { Autocomplete } from '@mui/material';
import { memo, useCallback, useEffect, useRef, FocusEvent } from 'react';
import Exercise from '../../../../models/Exercise';
import {
  StyledCellGrid,
  TableCell,
  StyledTextField
} from '../../styled-components/Table';
import { useTable } from '../../hooks/useTable';
import { useForm } from '../../../../hooks/useForm';
import { Cell } from '../../models/table';

interface RoutineCellProps {
  exercise: string;
  series: string;
  repetitions: string;
  weight: string;
  cell: {
    row: number;
    column: number;
  };
}

export const RoutineCell: React.FC<RoutineCellProps> = memo(
  ({ exercise, series, repetitions, weight, cell }) => {
    const { tableState, handleCellChange } = useTable();
    const { exercises } = tableState;
    const row = cell.row;
    const column = cell.column;

    const { values, handleInputChange, setValues } = useForm<Cell>({
      exercise,
      series,
      repetitions,
      weight
    });

    useEffect(() => {
      setValues({ exercise, series, repetitions, weight });
    }, [exercise, series, repetitions, weight, setValues]);

    const handleInputBlur = (
      e: FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
    ) => {
      handleCellChange(e.target.name, e.target.value);
    };

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

    const muscle = useCallback(() => {
      const exerciseObject = exercises.find(
        (exercises) => exercises.label === exercise
      );
      return exerciseObject ? exerciseObject.muscle : '';
    }, [exercise, exercises]);

    return (
      <TableCell muscle={muscle()}>
        <StyledCellGrid>
          <Autocomplete
            disableClearable
            freeSolo
            selectOnFocus
            options={exercises ? exercises : []}
            groupBy={(exercise) => exercise.muscle}
            inputValue={values.exercise}
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
                onBlur={handleInputBlur}
              />
            )}
          />

          <StyledTextField
            name={`rows.${row}.columns.${column}.series`}
            variant='standard'
            value={values.series}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />

          <StyledTextField
            name={`rows.${row}.columns.${column}.repetitions`}
            variant='standard'
            value={values.repetitions}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />

          <StyledTextField
            name={`rows.${row}.columns.${column}.weight`}
            variant='standard'
            value={values.weight}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </StyledCellGrid>
      </TableCell>
    );
  }
);
