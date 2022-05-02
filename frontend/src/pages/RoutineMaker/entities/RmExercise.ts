import Exercise, { ExerciseDB } from './Exercise';
import User, { UserDB } from './User';

export default interface RmExercise {
  readonly user: User;
  readonly exercise: Exercise;
  readonly rm: number;
}

export interface RmExerciseDB {
  readonly user: UserDB;
  readonly exercise: ExerciseDB;
  readonly rm: number;
}
