package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.IntMother;

public class ExerciseRmMother {
    public static ExerciseRm create(int value) {
        return new ExerciseRm(value);
    }

    public static ExerciseRm random() {
        return new ExerciseRm(IntMother.random(20));
    }
}
