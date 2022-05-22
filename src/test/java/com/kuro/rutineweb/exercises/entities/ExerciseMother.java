package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.UserId;

public class ExerciseMother {
    public static Exercise create(UserId userId, ExerciseId id, ExerciseName name, ExerciseMuscle muscle, ExerciseBar bar, ExerciseRm rm) {
        return new Exercise(userId, id, name, muscle, bar, rm);
    }

    public static Exercise random() {
        return create(
                UserIdMother.random(),
                ExerciseIdMother.random(),
                ExerciseNameMother.random(),
                ExerciseMuscleMother.random(),
                ExerciseBarMother.random(),
                ExerciseRmMother.random()
        );
    }
}
