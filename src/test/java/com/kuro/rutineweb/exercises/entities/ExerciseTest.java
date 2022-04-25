package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.ExerciseId;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class ExerciseTest {
    @Test
    public void should_return_a_new_exercise_instance() {
        ExerciseId id = new ExerciseId("PTR");
        ExerciseName name = new ExerciseName("Press Fatal");
        ExerciseMuscle muscle = new ExerciseMuscle("Pectoral");
        ExerciseBar bar = new ExerciseBar(10);

        Exercise created = ExerciseMother.create(id, name, muscle, bar);

        Assertions.assertEquals(id.getValue(), created.getId().getValue());
        Assertions.assertEquals(name.getValue(), created.getName().getValue());
        Assertions.assertEquals(muscle.getValue(), created.getMuscle().getValue());
        Assertions.assertEquals(bar.getValue(), created.getBar().getValue());
    }
}
