import { Nullable } from '../../../Shared/domain/Nullable';
import { Exercise } from './Exercise';
import { ExerciseId } from './ExerciseId';

export interface ExerciseRepository {
  create(exercise: Exercise): Promise<void>;

  searchAll(): Promise<Nullable<Exercise[]>>;

  search(id: ExerciseId): Promise<Nullable<Exercise>>;
}
