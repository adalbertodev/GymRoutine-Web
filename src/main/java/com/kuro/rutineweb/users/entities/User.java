package com.kuro.rutineweb.users.entities;

import com.kuro.rutineweb.Shared.entities.UserId;
import com.kuro.rutineweb.Shared.entities.DataItem;
import com.kuro.rutineweb.Shared.entities.valueObject.Uuid;
import lombok.Getter;

public class User extends DataItem {
    @Getter
    private UserId id;

    @Getter
    private UserName name;

    @Getter
    private UserPassword password;

    public User(
            UserId id, UserName name,
            UserPassword password) {
        super();
        this.id = id;
        this.name = name;
        this.password = password;
    }

    public static User fromPrimitives(String id, String name,
                                          String password) {
        if(id == null) {
            id = Uuid.random().toString();
        }

        return new User(
                new UserId(id),
                new UserName(name),
                new UserPassword(password)
        );
    }

    public static User fromPrimitives(UserPrimitive primitive) {
        if(primitive.getId() == null) {
            primitive.setId(Uuid.random().getValue());
        }

        return new User(
                new UserId(primitive.getId()),
                new UserName(primitive.getName()),
                new UserPassword(primitive.getPassword())
        );
    }

    public UserPrimitive toPrimitives() {
        return new UserPrimitive(
                id.getValue(),
                name.getValue(),
                password.getValue()
        );
    }
}
