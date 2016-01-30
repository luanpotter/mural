package io.mural.models.mural;

import io.yawp.repository.IdRef;

public interface MuralFacade {

	public IdRef<Mural> getId();

	public String getNome();

	public String getColor();

	public void setColor(String color);
}
