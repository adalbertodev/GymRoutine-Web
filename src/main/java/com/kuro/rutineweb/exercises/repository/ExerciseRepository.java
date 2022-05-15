package com.kuro.rutineweb.exercises.repository;

import com.kuro.rutineweb.exercises.entities.Exercise;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public interface ExerciseRepository {
    void save(Exercise exercise) throws SQLException;

    Exercise findById(String id) throws SQLException;

    boolean existsById(String id) throws SQLException;

    List<Exercise> findAll() throws SQLException;

    long count() throws SQLException;

    void deleteById(String id) throws SQLException;

    void delete(Exercise exercise) throws SQLException;
}
