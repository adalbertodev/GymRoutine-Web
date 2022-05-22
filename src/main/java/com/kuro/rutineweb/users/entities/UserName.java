package com.kuro.rutineweb.users.entities;

import com.kuro.rutineweb.Shared.entities.valueObject.InvalidArgumentError;
import com.kuro.rutineweb.Shared.entities.valueObject.StringValueObject;

public class UserName extends StringValueObject {
    public UserName(String value) {
        super(value);
        ensureLengthIsLessThan50Characters(value);
    }

    private void ensureLengthIsLessThan50Characters(String value) {
        if(value.length() > 50) {
            throw new InvalidArgumentError("The Exercise Name " + value + " has more than 50 characters");
        }
    }
}
