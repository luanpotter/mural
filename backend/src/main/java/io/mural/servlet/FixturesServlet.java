package io.mural.servlet;

import io.yawp.servlet.EndpointServlet;

import javax.servlet.ServletConfig;
import javax.servlet.ServletException;

public class FixturesServlet extends EndpointServlet {

	private static final long serialVersionUID = 5611711806311665204L;

	@Override
	public void init(ServletConfig config) throws ServletException {
		setWithHooks(false);
		super.init(config);
	}

}
