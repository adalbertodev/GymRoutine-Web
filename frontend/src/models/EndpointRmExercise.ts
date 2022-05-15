import EndpointExercise from './EndpointExercise';
import User from './User';

export default interface EndpointRmExercise {
  readonly user: User;
  readonly exercise: EndpointExercise;
  readonly rm: number;
}
