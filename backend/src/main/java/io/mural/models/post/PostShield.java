package io.mural.models.post;

import io.mural.models.mural.Mural;
import io.mural.models.mural.MuralShield;
import io.yawp.repository.IdRef;
import io.yawp.repository.shields.Shield;

public class PostShield extends Shield<Post> {

	
	@Override
	public void index(IdRef<?> parentId) {
		if(requestContext.hasParam("mural")) {
			IdRef<Mural> muralId = id(Mural.class, requestContext.getParam("mural"));
			Mural mural = muralId.fetch();
			allow(mural.hasPermission(feature(MuralShield.class).getCookie().getValue()));
		}
	}

	@Override
	public void defaults() {
		allow().where("muralId->senha", "=", feature(MuralShield.class).getCookie().getValue());
	}
}
