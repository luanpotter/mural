package io.mural.models.mural;

import io.yawp.repository.IdRef;
import io.yawp.repository.annotations.Endpoint;
import io.yawp.repository.annotations.Id;

@Endpoint(path = "/murais")
public class Mural implements MuralFacade {

	@Id
	IdRef<Mural> id;

	String nome;

	String color;

	String senha;

	public boolean hasPermission(String value) {
		return senha.equals(value);
	}

	@Override
	public IdRef<Mural> getId() {
		return id;
	}

	@Override
	public String getNome() {
		return nome;
	}

	@Override
	public String getCor() {
		return color;
	}
}
