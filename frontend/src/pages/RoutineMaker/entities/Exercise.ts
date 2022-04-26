export default interface Exercise {
  readonly id: string;
  readonly label: string;
  readonly muscle: string;
  readonly bar?: number;
}

export interface ExerciseTable {
  id: {
    value: string;
  };
  name: {
    value: string;
  };
  muscle: {
    value: string;
  };
  bar?: {
    value: number;
  };
}
