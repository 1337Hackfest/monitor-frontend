define([
  // Application.
  "app",
  "modules/node"
],

function(app, Node) {

  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "/": 			"index",
      "nodes": 	"listNodes"
    },

    index: function() {
    	console.log("You got me!");
    },

    listNodes: function() {
    	console.log("You asked for nodes");
    	new Node.Views.List().render();
    }
  });

  return Router;

});
