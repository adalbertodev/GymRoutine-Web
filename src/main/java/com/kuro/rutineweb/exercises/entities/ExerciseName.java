package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.valueObject.InvalidArgumentError;
import com.kuro.rutineweb.Shared.entities.valueObject.StringValueObject;

public class ExerciseName extends StringValueObject {
    public ExerciseName(String value) {
        super(value);
        ensureLengthIsLessThan50Characters(value);
    }

    private void ensureLengthIsLessThan50Characters(String value) {
        if(value.length() > 50) {
            throw new InvalidArgumentError("The Exercise Name " + value + " has more than 50 characters");
        }
    }
}
