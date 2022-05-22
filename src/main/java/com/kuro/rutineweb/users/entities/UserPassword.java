package com.kuro.rutineweb.users.entities;

import com.kuro.rutineweb.Shared.entities.valueObject.InvalidArgumentError;
import com.kuro.rutineweb.Shared.entities.valueObject.StringValueObject;

public class UserPassword extends StringValueObject {
    public UserPassword(String value) {
        super(value);
        ensureLengthIsLessThan255Characters(value);
    }

    private void ensureLengthIsLessThan255Characters(String value) {
        if(value != null && value.length() > 255) {
            throw new InvalidArgumentError("The Exercise Name " + value + " has more than 255 characters");
        }
    }
}
