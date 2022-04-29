import { ExerciseDB } from './Exercise';
import { UserDB } from './User';

export default interface RmExercise {
  readonly user: UserDB;
  readonly exercise: ExerciseDB;
  readonly rm: number;
}

export interface RmExerciseDB {
  readonly user: UserDB;
  readonly exercise: ExerciseDB;
  readonly rm: number;
}
