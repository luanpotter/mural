package io.mural.models.mural;

import io.mural.models.usuario.Usuario;
import io.yawp.repository.IdRef;
import io.yawp.repository.annotations.Endpoint;
import io.yawp.repository.annotations.Id;

@Endpoint(path = "/murais")
public class Mural {

	@Id
	IdRef<Mural> id;

	IdRef<Usuario> usuarioId;

	String nome;

	String color;

}
