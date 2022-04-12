import { ExerciseMuscle } from '../../../../../src/Contexts/Rutine/Exercises/domain/ExerciseMuscle';
import { WordMother } from '../../../Shared/domain/WordMother';

export class ExerciseMuscleMother {
  static create(value: string): ExerciseMuscle {
    return new ExerciseMuscle(value);
  }

  static random(): ExerciseMuscle {
    return this.create(WordMother.random());
  }
}
