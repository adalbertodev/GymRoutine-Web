package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.WordMother;

public class ExerciseIdMother {
    public static ExerciseId create(String value) {
        return new ExerciseId(value);
    }

    public static ExerciseId random() {
        return new ExerciseId(WordMother.random(12));
    }
}
