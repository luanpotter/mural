package io.mural.models.post;

import io.mural.models.mural.Mural;
import io.yawp.repository.IdRef;
import io.yawp.repository.hooks.Hook;
import io.yawp.repository.query.QueryBuilder;

public class PostHook extends Hook<Post> {

	@Override
	public void beforeQuery(QueryBuilder<Post> q) {
		q.order("order");
		
		if(requestContext.hasParam("mural")) {
			IdRef<Mural> muralId = id(Mural.class, requestContext.getParam("mural"));
			q.where("muralId", "=", muralId);
		}
	}

	@Override
	public void beforeSave(Post p) {
		p.order = -System.currentTimeMillis();
	}
}
