package com.kuro.rutineweb.exercises.repository;

import com.kuro.rutineweb.Shared.repository.PostgreRepository;
import com.kuro.rutineweb.exercises.entities.Exercise;
import com.kuro.rutineweb.exercises.entities.ExerciseId;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

@Repository
public class PostgreExerciseRepository extends PostgreRepository<Exercise> implements ExerciseRepository {

    public PostgreExerciseRepository() {
        super();
    }

    @Override
    protected String tableName() {
        return "exercises";
    }

    @Override
    public void save(Exercise exercise) throws SQLException {
        if(existsById(exercise.getId().toString())) {
            update(exercise);
            return;
        }
        create(exercise);
    }

    private void create(Exercise exercise) throws SQLException {
        String query = "" +
                "INSERT INTO " + tableName() + "(id, name, muscle, bar) VALUES('" +
                    exercise.getId().getValue() + "','" +
                    exercise.getName().getValue() + "'," +
                    "(SELECT id FROM muscles WHERE name = '" + exercise.getMuscle().getValue() + "')," +
                    exercise.getBar().getValue() +
                ");";
        getModelByQuery(query);
    }

    private void update(Exercise exercise) throws SQLException {
        String query = "" +
                "UPDATE " + tableName() + " SET " +
                    "id = '" + exercise.getId().getValue() + "'," +
                    "name = '" + exercise.getName().getValue() + "'," +
                    "muscle = " + "(SELECT id FROM muscles WHERE name = '" + exercise.getMuscle().getValue() + "')," +
                    "bar = " + exercise.getBar().getValue() +
                "WHERE id = '" + exercise.getId().getValue() + "';";
        getModelByQuery(query);
    }

    @Override
    public Exercise findById(String id) throws SQLException {
        ExerciseId exerciseId = new ExerciseId(id);
        String query = "" +
                "SELECT " +
                    "id, name, " +
                    "(SELECT name FROM muscles WHERE id = E.muscle) as muscle, " +
                    "bar " +
                    "FROM " + tableName() + " as E " +
                "WHERE E.id = '" + exerciseId + "';";
        return getModelByQuery(query).get(0);
    }

    @Override
    public boolean existsById(String id) throws SQLException {
        try {
            findById(id);
            return true;
        }catch (Exception e) {
            return false;
        }
    }

    @Override
    public List<Exercise> findAll() throws SQLException {
        String query = "" +
                "SELECT " +
                    "user_id, id, name, " +
                    "(SELECT name FROM muscles WHERE id = E.muscle) as muscle, " +
                    "bar, rm " +
                "FROM " + tableName() + " as E;";
        return getModelByQuery(query);
    }

    @Override
    public long count() throws SQLException {
        String query = "SELECT COUNT(*) FROM " + tableName() + ";";
        return Long.getLong(executeQuery(query).get(0).get(0));
    }

    @Override
    public void deleteById(String id) throws SQLException {
        ExerciseId exerciseId = new ExerciseId(id);
        String query = "" +
                "DELETE FROM " + tableName() + " WHERE id = '" + exerciseId + "';";
        getModelByQuery(query);
    }

    @Override
    public void delete(Exercise exercise) throws SQLException {
        String query = "" +
                "DELETE FROM " + tableName() + " WHERE id = '" + exercise.getId() + "';";
        getModelByQuery(query);
    }

    @Override
    protected List<Exercise> convertResultToObjects(ResultSet result) throws SQLException {
        List<Exercise> exercises = new LinkedList<>();

        while (result.next())
        {
            String userId = result.getString("user_id");
            String id = result.getString("id");
            String name = result.getString("name");
            String muscle = result.getString("muscle");
            String barValue = result.getString("bar");
            String rmValue = result.getString("rm");
            int bar = barValue == null ? 0 : Integer.parseInt(barValue);
            int rm = rmValue == null ? 0 : Integer.parseInt(rmValue);

            exercises.add(Exercise.fromPrimitives(userId, id, name, muscle, bar, rm));
        }
        return exercises;
    }
}
