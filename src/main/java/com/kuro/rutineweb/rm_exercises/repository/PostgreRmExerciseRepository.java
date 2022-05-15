package com.kuro.rutineweb.rm_exercises.repository;

import com.kuro.rutineweb.Shared.entities.ExerciseId;
import com.kuro.rutineweb.Shared.entities.UserId;
import com.kuro.rutineweb.Shared.repository.PostgreRepository;
import com.kuro.rutineweb.exercises.entities.ExercisePrimitive;
import com.kuro.rutineweb.rm_exercises.entities.RmExercise;
import com.kuro.rutineweb.users.entities.UserPrimitive;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

@Repository
public class PostgreRmExerciseRepository extends PostgreRepository<RmExercise> implements RmExerciseRepository {
    public PostgreRmExerciseRepository() {
        super();
    }

    @Override
    protected String tableName() {
        return "rm_exercises";
    }

    @Override
    public void save(RmExercise rmExercise) throws SQLException {
        if(existsById(rmExercise.getUser().getId().toString(),
                rmExercise.getExercise().getId().toString())) {
            update(rmExercise);
            return;
        }
        create(rmExercise);
    }

    private void create(RmExercise rmExercise) throws SQLException {
        String query = "" +
                "INSERT INTO " + tableName() + " VALUES('" +
                rmExercise.getUser().getId() + "', '" +
                rmExercise.getExercise().getId() + "', " +
                rmExercise.getRm() + " " +
                ");";
        getModelByQuery(query);
    }

    private void update(RmExercise rmExercise) throws SQLException {
        String query = "" +
                "UPDATE " + tableName() + " SET " +
                "rm = " + rmExercise.getRm() + " " +
                "WHERE user_id = '" + rmExercise.getUser().getId() + "' AND " +
                "exercise = '" + rmExercise.getExercise().getId() + "';";
        getModelByQuery(query);
    }

    @Override
    public RmExercise findById(String user_id, String exercise_id) throws SQLException {
        UserId userId = new UserId(user_id);
        ExerciseId exerciseId = new ExerciseId(exercise_id);
        String query = "" +
                "SELECT " +
                "R.user_id, U.name as user_name, " +
                "U.password, R.exercise, " +
                "E.name as exercise_name, E.muscle, " +
                "E.bar, R.rm " +
                "FROM " + tableName() + " as R " +
                "INNER JOIN users as U " +
                "on U.id = R.user_id " +
                "INNER JOIN exercises as E " +
                "on E.id = R.exercise " +
                "WHERE U.id = '" + userId.getValue() + "' AND E.id = '" + exerciseId.getValue() + "';";
        return getModelByQuery(query).get(0);
    }

    @Override
    public List<RmExercise> findByUserId(String user_id) throws SQLException {
        UserId userId = new UserId(user_id);
        String query = "" +
                "SELECT " +
                "R.user_id, U.name as user_name, " +
                "U.password, R.exercise, " +
                "E.name as exercise_name, E.muscle, " +
                "E.bar, R.rm " +
                "FROM " + tableName() + " as R " +
                "INNER JOIN users as U " +
                "on U.id = R.user_id " +
                "INNER JOIN exercises as E " +
                "on E.id = R.exercise " +
                "WHERE U.id = '" + userId.getValue() + "';";
        return getModelByQuery(query);
    }

    @Override
    public boolean existsById(String user_id, String exercise_id) throws SQLException {
        try {
            findById(user_id, exercise_id);
            return true;
        }catch (Exception e) {
            return false;
        }
    }

    @Override
    public List<RmExercise> findAll() throws SQLException {
        String query = "" +
                "SELECT " +
                "R.user_id, U.name as user_name, " +
                "U.password, R.exercise, " +
                "E.name as exercise_name, E.muscle, " +
                "E.bar, R.rm " +
                "FROM " + tableName() + " as R " +
                "INNER JOIN users as U " +
                "on U.id = R.user_id " +
                "INNER JOIN exercises as E " +
                "on E.id = R.exercise;";
        return getModelByQuery(query);
    }

    @Override
    public long count() throws SQLException {
        String query = "SELECT COUNT(*) FROM " + tableName() + ";";
        return Long.getLong(executeQuery(query).get(0).get(0));
    }

    @Override
    public void deleteById(String user_id, String exercise_id) throws SQLException {
        UserId userId = new UserId(user_id);
        ExerciseId exerciseId = new ExerciseId(exercise_id);

        String query = "" +
                "DELETE FROM " + tableName() + " WHERE user_id = '" + userId + "' AND exercise = '" + exerciseId+ "';";
        getModelByQuery(query);
    }

    @Override
    public void delete(RmExercise rmExercise) throws SQLException {
        String query = "" +
                "DELETE FROM " + tableName() + " WHERE user_id = '" + rmExercise.getUser() + "' AND exercise = '" + rmExercise.getExercise() + "';";
        getModelByQuery(query);
    }

    @Override
    protected List<RmExercise> convertResultToObjects(ResultSet result) throws SQLException {
        List<RmExercise> rmExercises = new LinkedList<>();

        while (result.next())
        {
            String user_id = result.getString("user_id");
            String user_name = result.getString("user_name");
            String password = result.getString("password");
            String exercise_id = result.getString("exercise");
            String exercise_name = result.getString("exercise_name");
            String muscle = result.getString("muscle");
            String barValue = result.getString("bar");
            String rmValue = result.getString("rm");
            int bar = barValue == null ? 0 : Integer.parseInt(barValue);
            int rm = rmValue == null ? 0 : Integer.parseInt(rmValue);

            UserPrimitive user = new UserPrimitive(user_id, user_name, password);
            ExercisePrimitive exercise = new ExercisePrimitive(exercise_id, exercise_name, muscle, bar);

            rmExercises.add(RmExercise.fromPrimitives(user, exercise, rm));
        }
        return rmExercises;
    }
}
