package io.mural.models.usuario;

import io.yawp.repository.IdRef;
import io.yawp.repository.annotations.Endpoint;
import io.yawp.repository.annotations.Id;

@Endpoint(path = "/usuarios")
public class Usuario {

    @Id
    IdRef<Usuario> id;

    String nome;


}
