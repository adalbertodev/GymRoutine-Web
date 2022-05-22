package com.kuro.rutineweb.Shared.entities;

public class IntMother {
    public static int random() {
        return (int)Math.floor(Math.random() * 100000000);
    }

    public static int random(int max) {
        return (int)Math.floor(Math.random() * max);
    }
}
