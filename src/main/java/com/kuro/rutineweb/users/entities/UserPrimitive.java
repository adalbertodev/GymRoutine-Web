package com.kuro.rutineweb.users.entities;

import com.kuro.rutineweb.Shared.entities.PrimitiveObject;
import lombok.Getter;
import lombok.Setter;

public class UserPrimitive extends PrimitiveObject {
    @Getter @Setter
    private String id;

    @Getter @Setter
    private String name;

    @Getter @Setter
    private String password;

    public UserPrimitive(
            String id, String name,
            String password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
}
