package com.kuro.rutineweb.Shared.entities.valueObject;

public class InvalidArgumentError extends Error {

    public InvalidArgumentError() {
        super();
    }

    public InvalidArgumentError(String message) {
        super(message);
    }
}
