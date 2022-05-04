import EndpointExercise from './EndpointExercise';
import User from './User';

export interface EndpointRmExercise {
  readonly user: User;
  readonly exercise: EndpointExercise;
  readonly rm: number;
}
