import { Autocomplete } from '@mui/material';
import { memo, useEffect, useRef, FocusEvent, useMemo } from 'react';
import Exercise from '../../../../models/Exercise';
import { StyledCellGrid, TableCell } from '../../styled-components/Table';
import { useTable } from '../../hooks/useTable';
import { useForm } from '../../../../hooks/useForm';
import { Cell } from '../../models/table';
import { RoutineInput } from './RoutineInput';
import { RoutineAutocomplete } from './RoutineAutocomplete';

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

    const handleInputBlur = (e: FocusEvent<HTMLInputElement>) => {
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

    const muscle = useMemo(
      () =>
        exercises.find((exercises) => exercises.label === exercise)?.muscle ||
        '',
      [exercise, exercises]
    );

    return (
      <TableCell muscle={muscle}>
        <StyledCellGrid>
          <RoutineAutocomplete
            options={exercises ? exercises : []}
            groupBy={(exercise) => exercise.muscle}
            inputValue={values.exercise}
            handleChange={handleAutocompleteChange}
            renderInput={(params) => (
              <RoutineInput
                {...params}
                name={`rows.${row}.columns.${column}.exercise`}
                InputProps={{
                  ...params.InputProps,
                  inputProps: {
                    ...params.inputProps,
                    style: { padding: 4 }
                  }
                }}
                inputRef={exerciseInput}
                handleInputChange={handleInputChange}
                handleInputBlur={handleInputBlur}
              />
            )}
          />

          <RoutineInput
            name={`rows.${row}.columns.${column}.series`}
            value={values.series}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />

          <RoutineInput
            name={`rows.${row}.columns.${column}.repetitions`}
            value={values.repetitions}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />

          <RoutineInput
            name={`rows.${row}.columns.${column}.weight`}
            value={values.weight}
            handleInputChange={handleInputChange}
            handleInputBlur={handleInputBlur}
          />
        </StyledCellGrid>
      </TableCell>
    );
  }
);
