import React, { useState } from 'react';
import Exercise, { ExerciseTable } from '../entities/Exercise';
import { getExercises } from '../ExerciseAPI';
import { Table } from '../styled-components/Table/Table';
import { TableContainer } from '../styled-components/Table/TableContainer';
import RoutineBody from './RoutineBody';
import RoutineHead from './RoutineHead';

const RoutineTable: React.FC = () => {
  const [options, setOptions] = useState<Exercise[]>([]);

  const searchExercises = async () => {
    console.log(options);
    if (options.length !== 0) {
      return;
    }

    const exercisesTable: ExerciseTable[] = await getExercises();
    const exercises = exercisesToExercises(exercisesTable);
    setOptions(exercises);
  };

  const exercisesToExercises = (
    exercisesTable: ExerciseTable[]
  ): Exercise[] => {
    const exercises: Exercise[] = [];

    exercisesTable.map((exerciseTable) => {
      const exercise = {
        id: exerciseTable.id.value,
        label: exerciseTable.name.value,
        muscle: exerciseTable.muscle.value,
        bar: exerciseTable.bar?.value
      };

      exercises.push(exercise);
      return exerciseTable;
    });
    return exercises;
  };
  searchExercises();
  return (
    <TableContainer>
      <Table id='rutineTable'>
        <RoutineHead />
        <RoutineBody exercises={options} />
      </Table>
    </TableContainer>
  );
};

export default RoutineTable;
