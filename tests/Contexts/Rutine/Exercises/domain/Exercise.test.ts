import { ExerciseBar } from '../../../../../src/Contexts/Rutine/Exercises/domain/ExerciseBar';
import { ExerciseId } from '../../../../../src/Contexts/Rutine/Exercises/domain/ExerciseId';
import { ExerciseMuscle } from '../../../../../src/Contexts/Rutine/Exercises/domain/ExerciseMuscle';
import { ExerciseName } from '../../../../../src/Contexts/Rutine/Exercises/domain/ExerciseName';
import { ExerciseMother } from './ExerciseMother';

describe('Exercise', () => {
  it('should return a new exercise instance', () => {
    const id = 'PBTR';
    const name = 'Pess Banca Tríceps';
    const muscle = 'Tríceps';
    const bar = 10;

    const exercise = ExerciseMother.create(
      new ExerciseId(id),
      new ExerciseName(name),
      new ExerciseMuscle(muscle),
      new ExerciseBar(bar)
    );

    expect(exercise.id.value).toBe(id);
    expect(exercise.name.value).toBe(name);
    expect(exercise.muscle.value).toBe(muscle);
    expect(exercise.bar.value).toBe(bar);
  });
});
