package com.kuro.rutineweb.Shared.repository;

import com.kuro.rutineweb.Shared.entities.DataItem;
import com.kuro.rutineweb.exercises.entities.Exercise;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;

import java.sql.*;
import java.util.LinkedList;
import java.util.List;
import java.util.Properties;

@PropertySource("classpath:application.properties")
public abstract class PostgreRepository<T extends DataItem> {
    protected abstract String tableName();

    @Value("${spring.datasource.url}")
    private String url;

    @Value("${spring.datasource.username}")
    private String username;

    @Value("${spring.datasource.password}")
    private String password;

    private Connection connect() throws SQLException {
        Properties props = new Properties();
        props.setProperty("user", username);
        props.setProperty("password", password);
        return DriverManager.getConnection(url, props);
    }

    protected List<List<String>> executeQuery(String query) throws SQLException {
        try(Connection connection = connect();
                Statement statement = connection.createStatement();
                ResultSet result = statement.executeQuery(query)) {
            List<List<String>> objects = convertResultToArray(result);
            result.close();
            statement.close();
            connection.close();
            return objects;
        }
    }

    protected List<T> getModelByQuery(String query) throws SQLException {
        try(Connection connection = connect();
                Statement statement = connection.createStatement();
                ResultSet result = statement.executeQuery(query)) {
            List<T> objects = convertResultToObjects(result);
            result.close();
            statement.close();
            connection.close();
            return objects;
        }
    }

    protected List<List<String>> convertResultToArray(ResultSet result) throws SQLException {
        List<List<String>> exercises = new LinkedList<>();
        int columnCount = result.getMetaData().getColumnCount();

        while (result.next())
        {
            List<String> row = new LinkedList<>();
            for (int i = 1; i <= columnCount; i++) {
                row.add(result.getString(i));
            }
            exercises.add(row);
        }
        return exercises;
    }

    protected abstract List<T> convertResultToObjects(ResultSet result) throws SQLException;
}
