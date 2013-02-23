define([
  // Libraries.
  "jquery",
  "lodash",
  "backbone",
  "text"

  // Plugins.
  //"plugins/backbone.layoutmanager"
],

function($, _, Backbone, Text) {

	// Provide a global location to place configuration settings and module
	// creation.
	var app = {
	// The root path to run the application.
	root: "/"
	};

	// Localize or create a new JavaScript Template object.
	//var JST = window.JST = window.JST || {};

	// Mix Backbone.Events, and modules into the app object.
	return _.extend(app, {
		// Create a custom object with a nested Views object.
		module: function(additionalProps) {
		  return _.extend({ Views: {} }, additionalProps);
		},

	}, Backbone.Events);
	return app;
});
