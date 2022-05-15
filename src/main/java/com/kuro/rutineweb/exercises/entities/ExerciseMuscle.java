package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.valueObject.InvalidArgumentError;
import com.kuro.rutineweb.Shared.entities.valueObject.StringValueObject;

public class ExerciseMuscle extends StringValueObject {
    public ExerciseMuscle(String value) {
        super(value);
        ensureLengthIsLessThan30Characters(value);
    }

    private void ensureLengthIsLessThan30Characters(String value) {
        if(value.length() > 30) {
            throw new InvalidArgumentError("The Exercise Muscle " + value + " has more than 30 characters");
        }
    }
}
