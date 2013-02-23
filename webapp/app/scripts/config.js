// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file.
  deps: ["main"],

  paths: {
    // JavaScript folders.
    libs: "vendor/libs",
    plugins: "vendor/plugins",

    // Libraries.
    jquery: "vendor/libs/jquery",
    lodash: "vendor/libs/lodash",
    backbone: "vendor/libs/backbone",
    text: "vendor/libs/text",

    //Templates
    templates: "../templates"
  },

  shim: {
    // Backbone library depends on lodash and jQuery.
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    }
  }

});
