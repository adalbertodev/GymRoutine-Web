package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.WordMother;

public class ExerciseMuscleMother {
    public static ExerciseMuscle create(String value) {
        return new ExerciseMuscle(value);
    }

    public static ExerciseMuscle random() {
        return new ExerciseMuscle(WordMother.random(30));
    }
}
