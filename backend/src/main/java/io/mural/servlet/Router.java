package io.mural.servlet;

import static io.mural.servlet.Pages.MURAL;
import static io.mural.servlet.Pages.POST;

public class Router {

    public Pages route(String path) {
        String[] split = path.split("/");
        if (split.length <= 1) {
            return Pages.HOME;
        }
        if (split.length == 2) {
            return MURAL;
        }
        if (split.length == 3 && split[2].equals("post")) {
            return POST;
        }
        return Pages.NOT_FOUND;
    }

}
