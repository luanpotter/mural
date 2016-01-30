package io.mural.models.mural;

import io.yawp.commons.http.HttpException;
import io.yawp.commons.http.annotation.GET;
import io.yawp.repository.IdRef;
import io.yawp.repository.shields.Shield;

import javax.servlet.http.Cookie;
import java.util.List;

public class MuralShield extends Shield<Mural> {

    @SuppressWarnings("unchecked")
    @Override
    public void defaults() {
        allow().where("senha", "=", getCookie().getValue()).facade(MuralFacade.class);
    }

    @Override
    public void create(List<Mural> objects) {
        allow();
    }

    @GET
    public void exists(IdRef<Mural> id) {
        allow();
    }

    public Cookie getCookie() {
        Cookie[] cookies = requestContext.req() != null ? requestContext.req().getCookies() : new Cookie[]{};

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("auth")) {
                    return cookie;
                }
            }
        }
        throw new HttpException(401);
    }

    @Override
    public void index(IdRef<?> parentId) {
        allow(false);
    }

}
