export class Exercise {
  readonly id: string;
  readonly name: string;
  readonly muscle: string;
  readonly bar: string;

  constructor(id: string, name: string, muscle: string, bar: string) {
    this.id = id;
    this.name = name;
    this.muscle = muscle;
    this.bar = bar;
  }
}
