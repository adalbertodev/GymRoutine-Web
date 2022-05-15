package com.kuro.rutineweb.Shared.entities;

public class WordMother {
    public static String random() {
        return randomWord(15);
    }

    public static String random(int length) {
        return randomWord(length);
    }


    private static String randomWord(int length)
    {
        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                + "abcdefghijklmnopqrstuvxyz";

        StringBuilder builder = new StringBuilder(length);

        for (int i = 0; i < length; i++) {
            int index
                    = (int)(AlphaNumericString.length()
                    * Math.random());
            builder.append(AlphaNumericString
                    .charAt(index));
        }
        return builder.toString();
    }
}
