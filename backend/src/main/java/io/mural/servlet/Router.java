package io.mural.servlet;

import static io.mural.servlet.Page.MURAL;
import static io.mural.servlet.Page.POST;

public class Router {

    public Page route(String path) {
        String[] split = path.split("/");
        if (split.length <= 1) {
            return Page.HOME;
        }
        if (split.length == 2) {
            return MURAL;
        }
        if (split.length == 3 && split[2].equals("post")) {
            return POST;
        }
        return Page.NOT_FOUND;
    }

}
