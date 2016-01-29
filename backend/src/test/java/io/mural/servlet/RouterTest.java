package io.mural.servlet;

import org.junit.Test;

import static io.mural.servlet.Pages.*;
import static org.junit.Assert.assertEquals;

public class RouterTest {

    @Test
    public void testHome() {
        Router router = new Router();

        assertEquals(Pages.HOME, router.route(""));
        assertEquals(Pages.HOME, router.route("/"));
    }

    @Test
    public void testMural() {
        Router router = new Router();

        assertEquals(MURAL, router.route("/xpto"));
        assertEquals(MURAL, router.route("/123"));
        assertEquals(MURAL, router.route("/abc"));
    }

    @Test
    public void testPost() {
        Router router = new Router();

        assertEquals(POST, router.route("/xpto/post"));
        assertEquals(POST, router.route("/123/post"));
        assertEquals(POST, router.route("/abc/post"));
    }

    @Test
    public void testInvalid() {
        Router router = new Router();

        assertEquals(NOT_FOUND, router.route("/xpto/pos/t"));
        assertEquals(NOT_FOUND, router.route("/123/po/st"));
        assertEquals(NOT_FOUND, router.route("/123/abc"));
    }


}
