package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.UserId;
import com.kuro.rutineweb.Shared.entities.WordMother;

public class UserIdMother {
    public static UserId create(String value) {
        return new UserId(value);
    }

    public static UserId random() {
        return new UserId(WordMother.random(12));
    }
}
