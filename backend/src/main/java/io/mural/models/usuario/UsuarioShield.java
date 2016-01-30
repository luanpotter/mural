package io.mural.models.usuario;

import java.util.List;

import io.yawp.repository.shields.Shield;

public class UsuarioShield extends Shield<Usuario> {

	public void create(List<Usuario> objects) {
		allow();
	}
}
