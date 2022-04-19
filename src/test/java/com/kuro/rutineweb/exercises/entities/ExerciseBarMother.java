package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.IntMother;

public class ExerciseBarMother {
    public static ExerciseBar create(int value) {
        return new ExerciseBar(value);
    }

    public static ExerciseBar random() {
        return new ExerciseBar(IntMother.random(20));
    }
}
