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

@RestController
public class ExerciseController {
    @Autowired
    private ExerciseRepository repository;

    @GetMapping("/api/exercises")
    public List<Exercise> findAll() {
        try {
            return repository.findAll();
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @GetMapping("/api/exercises/{id}")
    public Exercise findById(@PathVariable String id) {
        try {
            return repository.findById(id);
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
}
