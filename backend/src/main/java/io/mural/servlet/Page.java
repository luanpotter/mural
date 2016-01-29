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
            return "404.html";
        }
    }, HOME {
        @Override
        public String path() {
            return "index.html";
        }
    }, MURAL {
        @Override
        public String path() {
            return "mural.html";
        }
    };

    public abstract String path();
}
