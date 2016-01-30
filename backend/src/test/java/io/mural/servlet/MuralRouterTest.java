package io.mural.servlet;

import org.junit.Test;

import static io.mural.servlet.Page.*;
import static org.junit.Assert.assertEquals;

public class MuralRouterTest {

    @Test
    public void testHome() {
        MuralRouter router = new MuralRouter();

        assertEquals(Page.HOME, router.route(""));
        assertEquals(Page.HOME, router.route("/"));
    }

    @Test
    public void testMural() {
        MuralRouter router = new MuralRouter();

        assertEquals(MURAL, router.route("/murais/xpto"));
        assertEquals(MURAL, router.route("/murais/123"));
        assertEquals(MURAL, router.route("/murais/abc"));
    }

    @Test
    public void testPost() {
        MuralRouter router = new MuralRouter();

        assertEquals(POST, router.route("/murais/xpto/post"));
        assertEquals(POST, router.route("/murais/123/post"));
        assertEquals(POST, router.route("/murais/abc/post"));
    }

    @Test
    public void testInvalid() {
        MuralRouter router = new MuralRouter();

        assertEquals(STATIC_CONTENT, router.route("/js/x.js"));
        assertEquals(STATIC_CONTENT, router.route("/murais/xpto/pos/t"));
        assertEquals(STATIC_CONTENT, router.route("/murais/123/po/st"));
        assertEquals(STATIC_CONTENT, router.route("/murais/123/abc"));
    }


}
