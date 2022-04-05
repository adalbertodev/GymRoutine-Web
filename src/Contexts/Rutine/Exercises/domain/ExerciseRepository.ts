import { Nullable } from '../../../Shared/domain/Nullable';
import { Exercise } from './Exercise';
import { ExerciseId } from './ExerciseId';

export interface ExerciseRepository {
  save(exercise: Exercise): Promise<void>;

  search(id: ExerciseId): Promise<Nullable<Exercise>>;
}
