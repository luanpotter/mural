package io.mural.servlet;

import com.google.appengine.repackaged.com.google.api.client.util.IOUtils;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;

public class RouterServlet extends HttpServlet {

    private static final String BASE_PATH = "/murais";

    private static final int BASE_PATH_LENGTH = BASE_PATH.length();

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        response(getPath(req.getRequestURI()), resp);
    }

    private String getPath(String path) {
        return path.substring(BASE_PATH_LENGTH);
    }

    private void response(String path, HttpServletResponse resp) throws IOException {
        Page page = routeToPage(path);
        resp.setCharacterEncoding("UTF-8");
        resp.setContentType("text/html");
        InputStream stream = getServletContext().getResourceAsStream(page.path());
        if (stream == null) {
            resp.setStatus(404);
            return;
        }
        IOUtils.copy(stream, resp.getOutputStream());
    }

    private Page routeToPage(String path) {
        Router router = new Router();
        return router.route(path);
    }

}
