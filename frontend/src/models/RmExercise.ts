import Exercise from './Exercise';
import User from './User';

export default interface RmExercise {
  readonly user: User;
  readonly exercise: Exercise;
  readonly rm: number;
}
