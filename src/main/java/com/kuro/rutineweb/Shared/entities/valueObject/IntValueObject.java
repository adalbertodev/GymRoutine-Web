package com.kuro.rutineweb.Shared.entities.valueObject;

import lombok.Getter;

public class IntValueObject {
    @Getter
    private Integer value;

    public IntValueObject(Integer value) {
        this.value = value;
    }

    public boolean equalsTo(IntValueObject other) {
        return value.equals(other.value);
    }

    public boolean isBiggerThan(IntValueObject other) {
        return value > other.value;
    }
}
