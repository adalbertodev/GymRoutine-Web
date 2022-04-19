package com.kuro.rutineweb.Shared.entities.valueObject;

import lombok.Getter;

public class IntValueObject {
    @Getter
    private int value;

    public IntValueObject(int value) {
        this.value = value;
    }

    public boolean equalsTo(IntValueObject other) {
        return value == other.value;
    }

    public boolean isBiggerThan(IntValueObject other) {
        return value > other.value;
    }
}
