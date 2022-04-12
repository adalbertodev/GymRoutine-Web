import { ExerciseName } from '../../../../../src/Contexts/Rutine/Exercises/domain/ExerciseName';
import { WordMother } from '../../../Shared/domain/WordMother';

export class ExerciseNameMother {
  static create(value: string): ExerciseName {
    return new ExerciseName(value);
  }

  static random(): ExerciseName {
    return this.create(WordMother.random());
  }
}
