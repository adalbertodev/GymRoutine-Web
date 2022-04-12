import { Exercise } from '../../../../../src/Contexts/Rutine/Exercises/domain/Exercise';
import { ExerciseBar } from '../../../../../src/Contexts/Rutine/Exercises/domain/ExerciseBar';
import { ExerciseId } from '../../../../../src/Contexts/Rutine/Exercises/domain/ExerciseId';
import { ExerciseMuscle } from '../../../../../src/Contexts/Rutine/Exercises/domain/ExerciseMuscle';
import { ExerciseName } from '../../../../../src/Contexts/Rutine/Exercises/domain/ExerciseName';
import { ExerciseBarMother } from './ExerciseBarMother';
import { ExerciseIdMother } from './ExerciseIdMother';
import { ExerciseMuscleMother } from './ExerciseMuscleMother';
import { ExerciseNameMother } from './ExerciseNameMother';

export class ExerciseMother {
  static create(id: ExerciseId, name: ExerciseName, muscle: ExerciseMuscle, bar: ExerciseBar) {
    return new Exercise(id, name, muscle, bar);
  }

  static random(): Exercise {
    return this.create(
      ExerciseIdMother.random(),
      ExerciseNameMother.random(),
      ExerciseMuscleMother.random(),
      ExerciseBarMother.random()
    );
  }
}
