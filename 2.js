(function($){

  var ListView = Backbone.View.extend({
    el: $('body'), // attaches 'this.el' to an existing element.

    events: {
      'click button#add': 'addItem'  
    },

    initialize: function(){
        _.bindAll(this, 'render', 'addItem'); // every function that uses 'this' as the current object should be in here

        this.counter = 0
        this.render(); // not all views are self-rendering. This one is.
    },

    render: function(){
        $(this.el).append("<button id='add'>Add list item</button>");
        $(this.el).append("<ul> </ul>");
    },
    
    addItem: function () {
        this.counter++;
        $('ul', this.el).append("<li>hello world"+this.counter+"</li>");
    }
  });

  var listView = new ListView();
})(jQuery);

