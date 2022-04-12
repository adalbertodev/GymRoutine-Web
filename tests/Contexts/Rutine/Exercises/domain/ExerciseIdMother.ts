import { ExerciseId } from '../../../../../src/Contexts/Rutine/Exercises/domain/ExerciseId';
import { WordMother } from '../../../Shared/domain/WordMother';

export class ExerciseIdMother {
  static create(value: string): ExerciseId {
    return new ExerciseId(value);
  }

  static random(): ExerciseId {
    return this.create(WordMother.random());
  }
}
