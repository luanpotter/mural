package io.mural.servlet;

public enum Page {

    POST {
        @Override
        public String path() {
            return "post.html";
        }
    }, NOT_FOUND {
        @Override
        public String path() {
            return "/static/404.html";
        }
    }, HOME {
        @Override
        public String path() {
            return "/static/index.html";
        }
    }, MURAL {
        @Override
        public String path() {
            return "/static/mural.html";
        }
    };

    public abstract String path();
}
