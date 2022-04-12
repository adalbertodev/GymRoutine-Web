export class IntegerMother {
  static random(max?: number): number {
    return Math.floor(Math.random() * (max || 100000000));
  }
}
