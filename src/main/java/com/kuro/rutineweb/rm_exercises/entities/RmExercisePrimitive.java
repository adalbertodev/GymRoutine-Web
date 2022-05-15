package com.kuro.rutineweb.rm_exercises.entities;

import com.kuro.rutineweb.Shared.entities.PrimitiveObject;
import com.kuro.rutineweb.exercises.entities.ExercisePrimitive;
import com.kuro.rutineweb.users.entities.UserPrimitive;
import lombok.Getter;
import lombok.Setter;

public class RmExercisePrimitive extends PrimitiveObject {
    @Getter
    @Setter
    private UserPrimitive user;

    @Getter @Setter
    private ExercisePrimitive exercise;

    @Getter @Setter
    private int rm;

    public RmExercisePrimitive(
            UserPrimitive user, ExercisePrimitive exercise, int rm) {
        this.user = user;
        this.exercise = exercise;
        this.rm = rm;
    }
}
