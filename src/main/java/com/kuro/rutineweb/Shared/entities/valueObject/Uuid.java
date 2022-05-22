package com.kuro.rutineweb.Shared.entities.valueObject;

import lombok.Getter;

import java.util.UUID;
import java.util.regex.Pattern;

public class Uuid {
    @Getter
    private String value;

    public Uuid(String value) {
        ensureIsValidUuid(value);

        this.value = value;
    }

    public static Uuid random() {
        return new Uuid(UUID.randomUUID().toString());
    }

    private void ensureIsValidUuid(String id) {
        if(id != null && !validateUuid(id)) {
            throw new InvalidArgumentError(this.getClass().getName() + "does not allow the value " + id);
        }
    }

    private boolean validateUuid(String id) {
        Pattern pattern = Pattern.compile("^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$");
        return pattern.matcher(id).matches();
    }

    @Override
    public String toString() {
        return this.value;
    }
}
