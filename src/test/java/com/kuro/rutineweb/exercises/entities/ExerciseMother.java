package com.kuro.rutineweb.exercises.entities;

public class ExerciseMother {
    public static Exercise create(ExerciseId id, ExerciseName name, ExerciseMuscle muscle, ExerciseBar bar) {
        return new Exercise(id, name, muscle, bar);
    }

    public static Exercise random() {
        return create(
                ExerciseIdMother.random(),
                ExerciseNameMother.random(),
                ExerciseMuscleMother.random(),
                ExerciseBarMother.random()
        );
    }
}