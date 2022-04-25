package com.kuro.rutineweb.users.repository;

import com.kuro.rutineweb.users.entities.User;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public interface UserRepository {
    void save(User user) throws SQLException;

    User findById(String id) throws SQLException;

    boolean existsById(String id) throws SQLException;

    List<User> findAll() throws SQLException;

    long count() throws SQLException;

    void deleteById(String id) throws SQLException;

    void delete(User exercise) throws SQLException;
}
