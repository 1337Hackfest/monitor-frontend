define([
    //Den "globale" applikasjons-referansen vår
    'app',
    'lodash',
    'text!../templates/listNodes.html'
], function(app, _, listNodesTpl){
  
    //"Node"-objektet som kan benyttes på tvers av applikasjonen 
    var Node = app.module();

    Node.Model = Backbone.Model.extend({
        //url: "her/defineres/backend/url"
        defaults: {
            title: "DefaultNode"
        }
    });

    Node.Collection = Backbone.Collection.extend({
        model: Node.Model
    });

    //Viewet som viser en liste over "Nodes"
    Node.Views.List = Backbone.View.extend({
        el: '#nodeList',

        initialize: function() {
            console.log("init Node ListView");

            //Litt dummy data..
            this.collection = new Node.Collection();
            this.collection.add({title: "Node Uno", id: "1"});                     
            this.collection.add({title: "Node Dos", id: "2"});

        },

        render: function(){
            console.log("render Node ListView");

            // Using Underscore we can compile our template with data
            var compiledTemplate = _.template( listNodesTpl, {nodes: this.collection.models} );
            // Append our compiled template to this Views "el"
            this.$el.html( compiledTemplate );
        }
    });

    return Node;
    // What we return here will be used by other modules
});