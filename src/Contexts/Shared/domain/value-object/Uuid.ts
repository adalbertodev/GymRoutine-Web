import { v4 } from 'uuid';
import validate from 'uuid-validate';

export class Uuid {
  readonly value: string;

  constructor(value: string) {
    this.ensureValidUuid(value);

    this.value = value;
  }

  static random(): Uuid {
    return new Uuid(v4());
  }

  private ensureValidUuid(id: string): void {
    if (!validate(id)) {
      throw new Error('ID no valido');
    }
  }

  toString() {
    return this.value;
  }
}
