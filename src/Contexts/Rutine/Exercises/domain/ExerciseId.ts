import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';

export class ExerciseId extends StringValueObject {
  constructor(value: string) {
    super(value.toUpperCase());
    this.ensureLengthIsLessThan12Characters(value);
  }

  private ensureLengthIsLessThan12Characters(value: string): void {
    if (value.length > 12) {
      throw new InvalidArgumentError(`The Exercise Name <${value}> has more than 12 characters`);
    }
  }
}
