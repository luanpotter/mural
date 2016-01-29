package io.mural.models.mural;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;

import io.mural.utils.EndpointTestCase;

public class MuralTest extends EndpointTestCase {

    @Test
    public void testCreate() {
        // TODO Auto-generated method stub
        String json=post("/murals", "{}");
        Mural mural=from(json, Mural.class);

        assertNotNull(mural);
    }

}
