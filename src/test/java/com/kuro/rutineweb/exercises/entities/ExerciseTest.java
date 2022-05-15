package com.kuro.rutineweb.exercises.entities;

import com.kuro.rutineweb.Shared.entities.UserId;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.UUID;


@SpringBootTest
public class ExerciseTest {
    @Test
    public void should_return_a_new_exercise_instance() {
        UserId userId = new UserId(UUID.randomUUID().toString());
        ExerciseId id = new ExerciseId("PTR");
        ExerciseName name = new ExerciseName("Press Fatal");
        ExerciseMuscle muscle = new ExerciseMuscle("Pectoral");
        ExerciseBar bar = new ExerciseBar(10);
        ExerciseRm rm = new ExerciseRm(0);

        Exercise created = ExerciseMother.create(userId, id, name, muscle, bar, rm);

        Assertions.assertEquals(id.getValue(), created.getId().getValue());
        Assertions.assertEquals(name.getValue(), created.getName().getValue());
        Assertions.assertEquals(muscle.getValue(), created.getMuscle().getValue());
        Assertions.assertEquals(bar.getValue(), created.getBar().getValue());
    }
}
