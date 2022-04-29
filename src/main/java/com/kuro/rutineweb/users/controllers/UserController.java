package com.kuro.rutineweb.users.controllers;

import com.kuro.rutineweb.users.entities.User;
import com.kuro.rutineweb.users.entities.UserPrimitive;
import com.kuro.rutineweb.users.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.sql.SQLException;
import java.util.List;
import java.util.stream.Collectors;

@RestController
public class UserController {
    @Autowired
    private UserRepository repository;

    @GetMapping("/api/users")
    public List<UserPrimitive> findAll() {
        try {
            return convertToPrimitives(repository.findAll());
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @GetMapping("/api/users/{id}")
    public UserPrimitive findById(@PathVariable String id) {
        try {
            return convertToPrimitive(repository.findById(id));
        } catch (SQLException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    @PostMapping("/api/users")
    public void save(@RequestBody UserPrimitive user) {
        try {
            repository.save(User.fromPrimitives(user));
        } catch (SQLException e) {

        }
    }

    @DeleteMapping("/api/users/{id}")
    public void delete(@PathVariable String id) {
        try {
            repository.deleteById(id);
        } catch (SQLException e) {

        }
    }

    @DeleteMapping("/api/users")
    public void delete(@RequestBody UserPrimitive user) {
        try {
            repository.delete(User.fromPrimitives(user));
        } catch (SQLException e) {

        }
    }

    private List<UserPrimitive> convertToPrimitives(List<User> users) {
        return users.stream().map(User::toPrimitives).collect(Collectors.toList());
    }

    private UserPrimitive convertToPrimitive(User user) {
        return user.toPrimitives();
    }
}
