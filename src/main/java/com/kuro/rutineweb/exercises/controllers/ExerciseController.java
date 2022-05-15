package com.kuro.rutineweb.exercises.controllers;

import com.kuro.rutineweb.exercises.entities.Exercise;
import com.kuro.rutineweb.exercises.entities.ExercisePrimitive;
import com.kuro.rutineweb.exercises.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class ExerciseController {
    @Autowired
    private ExerciseRepository repository;

    @GetMapping("/api/exercises")
    public List<ExercisePrimitive> findAll() {
        try {
            return convertToPrimitives(repository.findAll());
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @GetMapping("/api/exercises/{user_id}&&{id}")
    public ExercisePrimitive findById(@PathVariable("user_id") String user_id, @PathVariable("id") String id) {
        try {
            System.out.println(user_id);
            return convertToPrimitive(repository.findById(user_id, id));
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @GetMapping("/api/exercises/u={user_id}")
    public List<ExercisePrimitive> findByUserId(@PathVariable String user_id) {
        try {
            return convertToPrimitives(repository.findByUserId(user_id));
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @GetMapping("/api/exercises/e={id}")
    public List<ExercisePrimitive> findByExerciseId(@PathVariable String id) {
        try {
            return convertToPrimitives(repository.findByExerciseId(id));
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @PostMapping("/api/exercises")
    public void save(@RequestBody ExercisePrimitive exercise) {
        try {
            repository.save(Exercise.fromPrimitives(exercise));
        } catch (SQLException e) {

        }
    }

    @DeleteMapping("/api/exercises/{id}")
    public void delete(@PathVariable String id) {
        try {
            repository.deleteById(id);
        } catch (SQLException e) {

        }
    }

    @DeleteMapping("/api/exercises")
    public void delete(@RequestBody ExercisePrimitive exercise) {
        try {
            repository.delete(Exercise.fromPrimitives(exercise));
        } catch (SQLException e) {

        }
    }

    private List<ExercisePrimitive> convertToPrimitives(List<Exercise> exercises) {
        return exercises.stream().map(Exercise::toPrimitives).collect(Collectors.toList());
    }

    private ExercisePrimitive convertToPrimitive(Exercise exercise) {
        return exercise.toPrimitives();
    }
}
