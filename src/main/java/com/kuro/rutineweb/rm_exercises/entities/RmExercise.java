package com.kuro.rutineweb.rm_exercises.entities;

import com.kuro.rutineweb.Shared.entities.DataItem;
import com.kuro.rutineweb.exercises.entities.*;
import com.kuro.rutineweb.users.entities.User;
import com.kuro.rutineweb.users.entities.UserPrimitive;
import lombok.Getter;

public class RmExercise extends DataItem {
    @Getter
    private User user;

    @Getter
    private Exercise exercise;

    @Getter
    private RmExerciseRm rm;

    public RmExercise(
            User user, Exercise exercise,
            RmExerciseRm rm) {
        super();
        this.user = user;
        this.exercise = exercise;
        this.rm = rm;
    }

    public static RmExercise fromPrimitives(UserPrimitive user, ExercisePrimitive exercise, int rm) {
        return new RmExercise(
                User.fromPrimitives(user),
                Exercise.fromPrimitives(exercise),
                new RmExerciseRm(rm)
        );
    }

    public static RmExercise fromPrimitives(RmExercisePrimitive primitive) {
        return new RmExercise(
                User.fromPrimitives(primitive.getUser()),
                Exercise.fromPrimitives(primitive.getExercise()),
                new RmExerciseRm(primitive.getRm())
        );
    }

    public RmExercisePrimitive toPrimitives() {
        return new RmExercisePrimitive(
                user.toPrimitives(),
                exercise.toPrimitives(),
                rm.getValue()
        );
    }
}
