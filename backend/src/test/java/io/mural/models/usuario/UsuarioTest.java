package io.mural.models.usuario;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;

import io.mural.utils.EndpointTestCase;

public class UsuarioTest extends EndpointTestCase {

    @Test
    public void testCreate() {
        // TODO Auto-generated method stub
        String json=post("/usuarios", "{}");
        Usuario usuario=from(json, Usuario.class);

        assertNotNull(usuario);
    }

}
