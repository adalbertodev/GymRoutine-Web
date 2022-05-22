package com.kuro.rutineweb.Shared.entities.valueObject;

import lombok.Getter;

public class StringValueObject {
    @Getter
    private String value;

    public StringValueObject(String value) {
        this.value = value;
    }

    @Override
    public String toString() {
        return this.value;
    }
}