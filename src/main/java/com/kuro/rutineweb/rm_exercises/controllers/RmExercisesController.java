package com.kuro.rutineweb.rm_exercises.controllers;

import com.kuro.rutineweb.rm_exercises.entities.RmExercise;
import com.kuro.rutineweb.rm_exercises.entities.RmExercisePrimitive;
import com.kuro.rutineweb.rm_exercises.repository.RmExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class RmExercisesController {
    @Autowired
    private RmExerciseRepository repository;

    @GetMapping("/api/rmExercises")
    public List<RmExercisePrimitive> findAll() {
        try {
            return convertToPrimitives(repository.findAll());
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @GetMapping("/api/rmExercises/{user_id}&&{exercise_id}")
    public RmExercisePrimitive findById(@PathVariable String user_id, @PathVariable String exercise_id) {
        try {
            return convertToPrimitive(repository.findById(user_id, exercise_id));
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @GetMapping("/api/rmExercises/{user_id}")
    public List<RmExercisePrimitive> findById(@PathVariable String user_id) {
        try {
            return convertToPrimitives(repository.findByUserId(user_id));
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @PostMapping("/api/rmExercises")
    public void save(@RequestBody RmExercisePrimitive rmExercise) {
        try {
            repository.save(RmExercise.fromPrimitives(rmExercise));
        } catch (SQLException e) {

        }
    }

    @DeleteMapping("/api/rmExercises/{user_id}&&{exercise_id}")
    public void delete(@PathVariable String user_id, @PathVariable String exercise_id) {
        try {
            repository.deleteById(user_id, exercise_id);
        } catch (SQLException e) {

        }
    }

    @DeleteMapping("/api/rmExercises")
    public void delete(@RequestBody RmExercisePrimitive rmExercise) {
        try {
            repository.delete(RmExercise.fromPrimitives(rmExercise));
        } catch (SQLException e) {

        }
    }

    private List<RmExercisePrimitive> convertToPrimitives(List<RmExercise> rmExercises) {
        return rmExercises.stream().map(RmExercise::toPrimitives).collect(Collectors.toList());
    }

    private RmExercisePrimitive convertToPrimitive(RmExercise rmExercise) {
        return rmExercise.toPrimitives();
    }
}
