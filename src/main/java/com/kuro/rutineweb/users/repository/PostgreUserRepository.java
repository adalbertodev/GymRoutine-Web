package com.kuro.rutineweb.users.repository;


import com.kuro.rutineweb.Shared.repository.PostgreRepository;
import com.kuro.rutineweb.users.entities.User;
import com.kuro.rutineweb.Shared.entities.UserId;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.LinkedList;
import java.util.List;

@Repository
public class PostgreUserRepository extends PostgreRepository<User> implements UserRepository {
    public PostgreUserRepository() {
        super();
    }

    @Override
    protected String tableName() {
        return "users";
    }

    @Override
    public void save(User user) throws SQLException {
        if(existsById(user.getId().toString())) {
            update(user);
            return;
        }
        create(user);
    }

    private void create(User user) throws SQLException {
        String query = "INSERT INTO " + tableName() + "(id, name, password) VALUES('" +
                user.getId().getValue() + "', '" +
                user.getName().getValue() + "', '" +
                user.getPassword().getValue() + "');";
        getModelByQuery(query);
    }

    private void update(User user) throws SQLException {
        String query = "" +
                "UPDATE " + tableName() + " SET " +
                "name = '" + user.getName().getValue() + "', " +
                "password = '" + user.getPassword().getValue() + "'" +
                "WHERE id = '" + user.getId().getValue() + "';";
        getModelByQuery(query);
    }

    @Override
    public User findById(String id) throws SQLException {
        UserId userId = new UserId(id);
        String query = "" +
                "SELECT " +
                "id, name, password " +
                "FROM " + tableName() + " as U " +
                "WHERE U.id = '" + userId + "';";
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
    public List<User> findAll() throws SQLException {
        String query = "" +
                "SELECT " +
                "id, name, password " +
                "FROM " + tableName() + " as U;";
        return getModelByQuery(query);
    }

    @Override
    public long count() throws SQLException {
        String query = "SELECT COUNT(*) FROM " + tableName() + ";";
        return Long.getLong(executeQuery(query).get(0).get(0));
    }

    @Override
    public void deleteById(String id) throws SQLException {
        UserId userId = new UserId(id);
        String query = "" +
                "DELETE FROM " + tableName() + " WHERE id = '" + userId + "';";
        getModelByQuery(query);
    }

    @Override
    public void delete(User user) throws SQLException {
        String query = "" +
                "DELETE FROM " + tableName() + " WHERE id = '" + user.getId() + "';";
        getModelByQuery(query);
    }

    @Override
    protected List<User> convertResultToObjects(ResultSet result) throws SQLException {
        List<User> users = new LinkedList<>();

        while (result.next())
        {
            String id = result.getString("id");
            String name = result.getString("name");
            String password = result.getString("password");

            users.add(User.fromPrimitives(id, name, password));
        }
        return users;
    }
}
