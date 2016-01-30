package io.mural.models.mural;

import io.yawp.commons.http.annotation.GET;
import io.yawp.repository.IdRef;
import io.yawp.repository.actions.Action;
import io.yawp.repository.query.NoResultException;

public class MuralExistsAction extends Action<Mural> {

    @GET
    public boolean exists(IdRef<Mural> id) {
        try {
            Mural mural = id.fetch();
            return true;
        } catch (NoResultException e) {
            return false;
        }
    }

}
