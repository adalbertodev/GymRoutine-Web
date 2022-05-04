export default interface Exercise {
  readonly id: string;
  readonly label: string;
  readonly muscle: string;
  readonly bar?: number;
}
