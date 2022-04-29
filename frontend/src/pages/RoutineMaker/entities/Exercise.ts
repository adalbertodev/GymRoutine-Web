export default interface Exercise {
  readonly id: string;
  readonly label: string;
  readonly muscle: string;
  readonly bar?: number;
}

export interface ExerciseDB {
  readonly id: string;
  readonly name: string;
  readonly muscle: string;
  readonly bar?: number;
}
