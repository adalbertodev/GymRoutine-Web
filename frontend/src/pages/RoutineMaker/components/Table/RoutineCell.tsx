import { memo, useEffect, useRef, useMemo } from 'react';
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
    const { tableState, handleInputBlur } = useTable();
    const { exercises } = tableState;
    const { row, column } = cell;
    const exerciseInput = useRef<HTMLInputElement>(null);

    const { values, handleInputChange, setValues } = useForm<Cell>({
      exercise,
      series,
      repetitions,
      weight
    });

    useEffect(() => {
      setValues({ exercise, series, repetitions, weight });
    }, [exercise, series, repetitions, weight, setValues]);

    const muscle = useMemo(
      () =>
        exercises.find((exercises) => {
          const exercisesLabel = exercises.label.trim().toLowerCase();
          const exerciseValue = exercise.trim().toLowerCase();
          return exercisesLabel === exerciseValue;
        })?.muscle || '',
      [exercise, exercises]
    );

    return (
      <TableCell muscle={muscle}>
        <StyledCellGrid>
          <RoutineAutocomplete
            options={exercises ? exercises : []}
            groupBy={(exercise) => exercise.muscle}
            inputValue={values.exercise}
            input={exerciseInput}
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
                onChange={handleInputChange}
                onBlur={handleInputBlur}
              />
            )}
          />

          <RoutineInput
            name={`rows.${row}.columns.${column}.series`}
            value={values.series}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />

          <RoutineInput
            name={`rows.${row}.columns.${column}.repetitions`}
            value={values.repetitions}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />

          <RoutineInput
            name={`rows.${row}.columns.${column}.weight`}
            value={values.weight}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
          />
        </StyledCellGrid>
      </TableCell>
    );
  }
);
