package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.DataItem;
import lombok.Getter;


public class Exercise extends DataItem {
    @Getter
    private ExerciseId id;

    @Getter
    private ExerciseName name;

    @Getter
    private ExerciseMuscle muscle;

    @Getter
    private ExerciseBar bar;

    public Exercise(
            ExerciseId id, ExerciseName name,
            ExerciseMuscle muscle, ExerciseBar bar) {
        super();
        this.id = id;
        this.name = name;
        this.muscle = muscle;
        this.bar = bar;
    }

    public static Exercise fromPrimitives(String id, String name,
                                          String muscle, int bar) {
        return new Exercise(
                new ExerciseId(id),
                new ExerciseName(name),
                new ExerciseMuscle(muscle),
                new ExerciseBar(bar)
        );
    }

    public static Exercise fromPrimitives(ExercisePrimitive primitive) {
        return new Exercise(
                new ExerciseId(primitive.getId()),
                new ExerciseName(primitive.getName()),
                new ExerciseMuscle(primitive.getMuscle()),
                new ExerciseBar(primitive.getBar())
        );
    }

    public ExercisePrimitive toPrimitives() {
        return new ExercisePrimitive(
                id.getValue(),
                name.getValue(),
                muscle.getValue(),
                bar.getValue()
        );
    }
}
