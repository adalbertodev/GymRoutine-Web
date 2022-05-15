package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.WordMother;

public class ExerciseNameMother {
    public static ExerciseName create(String value) {
        return new ExerciseName(value);
    }

    public static ExerciseName random() {
        return new ExerciseName(WordMother.random(50));
    }
}
