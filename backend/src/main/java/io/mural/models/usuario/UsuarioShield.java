package io.mural.models.usuario;

import io.yawp.repository.shields.Shield;

public class UsuarioShield extends Shield<Usuario> {

    @Override
    public void defaults() {
        // TODO Auto-generated method stub
        allow();
    }

}
