export default interface EndpointExercise {
  readonly userId: string;
  readonly id: string;
  readonly name: string;
  readonly muscle: string;
  readonly bar?: number | null;
  readonly rm?: number | null;
}
