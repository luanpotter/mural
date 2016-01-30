package io.mural.servlet;

import static io.mural.servlet.Page.MURAL;
import static io.mural.servlet.Page.POST;

public class MuralRouter {

    private static final String BASE_PATH = "/murais";

    private static final int BASE_PATH_LENGTH = BASE_PATH.length();

    public Page route(String path) {
        if (path.equals("") || path.equals("/")) {
            return Page.HOME;
        }

        if (!path.startsWith(BASE_PATH)) {
            return Page.STATIC_CONTENT;
        }

        String[] split = path.substring(BASE_PATH_LENGTH).split("/");
        if (split.length == 2) {
            return MURAL;
        }
        if (split.length == 3 && split[2].equals("post")) {
            return POST;
        }

        return Page.STATIC_CONTENT;
    }

}
