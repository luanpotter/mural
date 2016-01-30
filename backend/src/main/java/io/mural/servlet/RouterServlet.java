package io.mural.servlet;

import com.google.appengine.repackaged.com.google.api.client.util.IOUtils;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.InputStream;

import static io.mural.servlet.Page.NOT_FOUND;
import static io.mural.servlet.Page.STATIC_CONTENT;

public class RouterServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        response(req.getRequestURI(), resp);
    }

    private void response(String uri, HttpServletResponse resp) throws IOException {
        String path = getPagePath(uri);

        resp.setCharacterEncoding("UTF-8");
        resp.setContentType(getContentType(path));
        InputStream stream = getFileInputStream(path);
        IOUtils.copy(stream, resp.getOutputStream());
    }

    private InputStream getFileInputStream(String path) {
        InputStream stream = getServletContext().getResourceAsStream(path);
        if (stream == null) {
            stream = getServletContext().getResourceAsStream(NOT_FOUND.path());
        }
        return stream;
    }

    private Page routeToPage(String path) {
        MuralRouter router = new MuralRouter();
        return router.route(path);
    }

    private String getPagePath(String uri) {
        Page page = routeToPage(uri);
        if (page == STATIC_CONTENT) {
            return uri;
        }
        return page.path();
    }

    private String getContentType(String path) {
        return MimeTypeUtils.probeMimeTypeForExtension(path);
    }

}
