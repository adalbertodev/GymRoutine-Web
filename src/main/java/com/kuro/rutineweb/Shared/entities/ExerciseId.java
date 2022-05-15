package com.kuro.rutineweb.Shared.entities;

import com.kuro.rutineweb.Shared.entities.valueObject.InvalidArgumentError;
import com.kuro.rutineweb.Shared.entities.valueObject.StringValueObject;

public class ExerciseId extends StringValueObject {
    public ExerciseId(String value) {
        super(value.toUpperCase());
        ensureLengthIsLessThan12Characters(value);
    }

    private void ensureLengthIsLessThan12Characters(String value) {
        if(value.length() > 12) {
            throw new InvalidArgumentError("The Exercise Id " + value + " has more than 12 characters");
        }
    }
}
