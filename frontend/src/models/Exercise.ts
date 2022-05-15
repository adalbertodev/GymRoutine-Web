export default interface Exercise {
  readonly userId: string;
  readonly id: string;
  readonly label: string;
  readonly muscle: string;
  readonly bar?: number | null;
  readonly rm?: number | null;
}
