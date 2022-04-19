package com.kuro.rutineweb.Shared.entities.valueObject;

import lombok.Getter;

public class FloatValueObject {
    @Getter
    private float value;

    public FloatValueObject(float value) {
        this.value = value;
    }

    public boolean equalsTo(FloatValueObject other) {
        return value == other.value;
    }

    public boolean isBiggerThan(FloatValueObject other) {
        return value > other.value;
    }
}
