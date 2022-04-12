import { DataItem } from '../../../Shared/domain/DataItem';
import { ExerciseBar } from './ExerciseBar';
import { ExerciseId } from './ExerciseId';
import { ExerciseMuscle } from './ExerciseMuscle';
import { ExerciseName } from './ExerciseName';

export class Exercise extends DataItem {
  readonly id: ExerciseId;
  readonly name: ExerciseName;
  readonly muscle: ExerciseMuscle;
  readonly bar: ExerciseBar;

  constructor(id: ExerciseId, name: ExerciseName, muscle: ExerciseMuscle, bar: ExerciseBar) {
    super();
    this.id = id;
    this.name = name;
    this.muscle = muscle;
    this.bar = bar;
  }

  static create(id: ExerciseId, name: ExerciseName, muscle: ExerciseMuscle, bar: ExerciseBar): Exercise {
    return new Exercise(id, name, muscle, bar);
  }

  static fromPrimitives(plaintData: { id: string; name: string; muscle: string; bar: number }) {
    return new Exercise(
      new ExerciseId(plaintData.id),
      new ExerciseName(plaintData.name),
      new ExerciseMuscle(plaintData.muscle),
      new ExerciseBar(plaintData.bar)
    );
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      muscle: this.muscle.value,
      bar: this.bar.value
    };
  }
}
