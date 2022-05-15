package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.DataItem;
import com.kuro.rutineweb.Shared.entities.UserId;
import lombok.Getter;


public class Exercise extends DataItem {
    @Getter
    private UserId userId;

    @Getter
    private ExerciseId id;

    @Getter
    private ExerciseName name;

    @Getter
    private ExerciseMuscle muscle;

    @Getter
    private ExerciseBar bar;

    @Getter
    private ExerciseRm rm;

    public Exercise(
            UserId userId, ExerciseId id,
            ExerciseName name, ExerciseMuscle muscle,
            ExerciseBar bar, ExerciseRm rm) {
        super();
        this.userId = userId;
        this.id = id;
        this.name = name;
        this.muscle = muscle;
        this.bar = bar;
        this.rm = rm;
    }

    public static Exercise fromPrimitives(String userId, String id, String name,
                                          String muscle, int bar, int rm) {
        return new Exercise(
                new UserId(userId),
                new ExerciseId(id),
                new ExerciseName(name),
                new ExerciseMuscle(muscle),
                new ExerciseBar(bar),
                new ExerciseRm(rm)
        );
    }

    public static Exercise fromPrimitives(ExercisePrimitive primitive) {
        return new Exercise(
                new UserId(primitive.getUserId()),
                new ExerciseId(primitive.getId()),
                new ExerciseName(primitive.getName()),
                new ExerciseMuscle(primitive.getMuscle()),
                new ExerciseBar(primitive.getBar()),
                new ExerciseRm(primitive.getRm())
        );
    }

    public ExercisePrimitive toPrimitives() {
        return new ExercisePrimitive(
                userId.getValue(),
                id.getValue(),
                name.getValue(),
                muscle.getValue(),
                bar.getValue(),
                rm.getValue()
        );
    }
}
