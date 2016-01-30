package io.mural.servlet;

public enum Page {

    HOME {
        @Override
        public String path() {
            return "/static/index.html";
        }
    }, MURAL {
        @Override
        public String path() {
            return "/static/mural.html";
        }
    }, POST {
        @Override
        public String path() {
            return "/static/post.html";
        }
    }, NOT_FOUND {
        @Override
        public String path() {
            return "/static/404.html";
        }
    }, STATIC_CONTENT {
        @Override
        public String path() {
            return null;
        }
    };

    public abstract String path();
}
