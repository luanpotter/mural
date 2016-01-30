package io.mural.models.post;

import io.mural.models.mural.MuralShield;
import io.yawp.repository.shields.Shield;

public class PostShield extends Shield<Post> {

	@Override
	public void defaults() {
		allow().where("muralId->senha", "=", feature(MuralShield.class).getCookie().getValue());
	}
}
