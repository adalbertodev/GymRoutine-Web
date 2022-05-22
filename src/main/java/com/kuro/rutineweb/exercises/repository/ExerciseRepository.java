package com.kuro.rutineweb.exercises.repository;

import com.kuro.rutineweb.exercises.entities.Exercise;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public interface ExerciseRepository {
    List<Exercise> findAll() throws SQLException;

    Exercise findById(String user_id, String id) throws SQLException;

    List<Exercise> findByUserId(String user_id) throws SQLException;

    List<Exercise> findByExerciseId(String id) throws SQLException;

    void save(Exercise exercise) throws SQLException;

    boolean existsById(String user_id, String id) throws SQLException;

    long count() throws SQLException;

    void deleteById(String id) throws SQLException;

    void delete(Exercise exercise) throws SQLException;
}
