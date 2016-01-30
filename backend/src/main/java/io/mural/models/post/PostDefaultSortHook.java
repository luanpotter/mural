package io.mural.models.post;

import io.yawp.repository.hooks.Hook;
import io.yawp.repository.query.QueryBuilder;

public class PostDefaultSortHook extends Hook<Post> {

    @Override
    public void beforeQuery(QueryBuilder<Post> q) {
        q.order("order");
    }
}
