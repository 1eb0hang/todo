package com.wren.web;

import io.javalin.Javalin;
import io.javalin.http.staticfiles.Location;


public class Web {
    private static final String PAGES_DIR = "/html";
    private static final int DEFAULT_PORT = 5000;
    private final Javalin javalin;

    /**
     * Configure the server
     */
    public Web() {
        this.javalin = Javalin.create(config -> {
		config.addStaticFiles(PAGES_DIR, Location.CLASSPATH);
	    });
    }

    public Web(String dir) {
        this.javalin = Javalin.create(config -> {
		    config.addStaticFiles(dir, Location.EXTERNAL);
	    });
    }

    public Web(String dir, boolean internal) {
	Location location = internal?Location.CLASSPATH:Location.EXTERNAL;
        this.javalin = Javalin.create(config -> {
		config.addStaticFiles(dir, location);
	    });
    }

    /**
     * Run the server for manual testing
     * @param args ignored, no command line args
     */
    public static void main(String[] args) {
        Web server = new Web(args[0]);
        server.start(DEFAULT_PORT);
    }

    /**
     * Start the server
     * @param port the port on which to start the server
     */
    public void start(int port) {
        this.javalin.start(port);
    }

    /**
     * Stop the server
     */
    public void stop() {
        this.javalin.close();
        this.javalin.stop();
    }
}
