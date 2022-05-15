package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.PrimitiveObject;
import lombok.Getter;
import lombok.Setter;

public class ExercisePrimitive extends PrimitiveObject {
    @Getter @Setter
    private String id;

    @Getter @Setter
    private String name;

    @Getter @Setter
    private String muscle;

    @Getter @Setter
    private int bar;

    public ExercisePrimitive(
            String id, String name,
            String muscle, int bar) {
        this.id = id;
        this.name = name;
        this.muscle = muscle;
        this.bar = bar;
    }
}
