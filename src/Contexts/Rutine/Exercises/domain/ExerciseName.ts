import { InvalidArgumentError } from '../../../Shared/domain/value-object/InvalidArgumentError';
import { StringValueObject } from '../../../Shared/domain/value-object/StringValueObject';

export class ExerciseName extends StringValueObject {
  constructor(value: string) {
    super(value);
    this.ensureLengthIsLessThan50Characters(value);
  }

  private ensureLengthIsLessThan50Characters(value: string): void {
    if (value.length > 50) {
      throw new InvalidArgumentError(`The Exercise Name <${value}> has more than 50 characters`);
    }
  }
}
