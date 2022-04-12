import { ExerciseBar } from '../../../../../src/Contexts/Rutine/Exercises/domain/ExerciseBar';
import { IntegerMother } from '../../../Shared/domain/IntegerMother';

export class ExerciseBarMother {
  static create(value: number): ExerciseBar {
    return new ExerciseBar(value);
  }

  static random(): ExerciseBar {
    return this.create(IntegerMother.random());
  }
}
