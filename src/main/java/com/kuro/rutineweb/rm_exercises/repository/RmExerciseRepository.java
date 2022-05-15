package com.kuro.rutineweb.rm_exercises.repository;

import com.kuro.rutineweb.rm_exercises.entities.RmExercise;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public interface RmExerciseRepository {
    void save(RmExercise rmExercise) throws SQLException;

    RmExercise findById(String user_id, String exercise_id) throws SQLException;

    List<RmExercise> findByUserId(String user_id) throws SQLException;

    boolean existsById(String user_id, String exercise_id) throws SQLException;

    List<RmExercise> findAll() throws SQLException;

    long count() throws SQLException;

    void deleteById(String user_id, String exercise_id) throws SQLException;

    void delete(RmExercise rmExercise) throws SQLException;
}
