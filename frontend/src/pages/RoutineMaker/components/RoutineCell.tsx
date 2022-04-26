import { Autocomplete } from '@mui/material';
// import { useState } from 'react';
import { Cell } from '../entities/Cell';
// import Exercise from '../entities/Exercise';
// import { getExercises } from '../ExerciseAPI';
import { StyledCellGrid } from '../styled-components/Table/StyledCellGrid';
import { StyledTextField } from '../styled-components/Table/StyledTextField';
import { TableCell } from '../styled-components/Table/TableCell';

const RoutineCell: React.FC<Cell> = ({
  exercise,
  series,
  repetitions,
  weight,
  exercises
}) => {
  // const [options, setOptions] = useState<Exercise[]>([]);

  const options =
    exercises !== undefined
      ? exercises
      : [
          { id: 'PRBC', label: 'Press Banca', muscle: 'Pectoral', bar: 20 },
          { id: 'DOMI', label: 'Dominadas', muscle: 'Espalda' },
          { id: 'PSMR', label: 'Peso Muerto', muscle: 'Piernas', bar: 20 },
          {
            id: 'Sentadillas',
            label: 'Sentadillas',
            muscle: 'Piernas',
            bar: 20
          }
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
          defaultValue={exercise !== undefined ? exercise : ''}
          renderInput={(params) => (
            <StyledTextField {...params} variant='standard' />
          )}
        />

        <StyledTextField
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
