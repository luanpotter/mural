package io.mural.servlet;

import static io.mural.servlet.Page.MURAL;
import static io.mural.servlet.Page.POST;

public class MuralRouter {


    private static final String TEST_FOLDER = "/test/";

    private static final String STATIC_FOLDER = "/static/";

    private static final String BASE_PATH = "/murais";

    private static final int BASE_PATH_LENGTH = BASE_PATH.length();

    public Page route(String path) {

        if (path.equals("") || path.equals("/")) {
            return Page.HOME;
        }

        if (path.toLowerCase().startsWith(TEST_FOLDER) || path.toLowerCase().startsWith(STATIC_FOLDER)) {
            return Page.STATIC_CONTENT;
        }

        String[] split = path.split("/");
        if (split.length == 2) {
            return MURAL;
        }

        if (split.length == 3 && split[2].equals("post")) {
            return POST;
        }

        return Page.STATIC_CONTENT;
    }

}
