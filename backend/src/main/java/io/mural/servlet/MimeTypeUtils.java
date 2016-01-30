package io.mural.servlet;

import org.apache.commons.io.FilenameUtils;

import java.util.HashMap;
import java.util.Map;

public class MimeTypeUtils {

    private static final Map<String, String> mimeTypesForExtensions = new HashMap<>();

    static {
        mimeTypesForExtensions.put("html", "text/html");
        mimeTypesForExtensions.put("css", "text/css");
        mimeTypesForExtensions.put("js", "text/javascript");
        mimeTypesForExtensions.put("json", "application/json");
        mimeTypesForExtensions.put("png", "image/png");
        mimeTypesForExtensions.put("jpg", "image/jpeg");
        mimeTypesForExtensions.put("gif", "image/gif");
        mimeTypesForExtensions.put("ico", "image/x-icon");
    }

    public static String probeMimeTypeForExtension(String path) {
        String extension = FilenameUtils.getExtension(path);
        String type = mimeTypesForExtensions.get(extension);
        if (type != null) {
            return type;
        } else {
            return "text/html";
        }
    }
}