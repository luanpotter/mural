package io.mural.models.mural;

import java.util.List;

import javax.servlet.http.Cookie;

import io.yawp.commons.http.HttpException;
import io.yawp.repository.shields.Shield;

public class MuralShield extends Shield<Mural> {

	@Override
	public void create(List<Mural> objects) {
		allow();
	}

	@Override
	public void defaults() {
		allow().where("senha", "=", getCookie().getValue());
	}

	public Cookie getCookie() {
		Cookie[] cookies = requestContext.req().getCookies();
		for (Cookie cookie : cookies) {
			if (cookie.getName().equals("auth")) {
				return cookie;
			}
		}
		throw new HttpException(401);
	}

}
