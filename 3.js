(function($) {

    var Item = Backbone.Model.extend({
        defaults: {
            part1: 'hello',
            part2: 'world'
        }
    });
    
    
    var List = Backbone.Collection.extend({
        model : Item
    });
    

	var ListView = Backbone.View.extend({

		// elements
		el : $('body'), // attaches 'this.el' to an existing element.

		events : {
			'click button#add' : 'addItem'
		},


		// functions
		initialize : function () {
			_.bindAll(this, 'render', 'addItem'); // every function that uses 'this' as the current object should be in here

            this.collection = new List();
            this.collection.bind('add', this.appendItem);

    		this.counter = 0;
    		this.render(); // not all views are self-rendering. This one is.
	    },

    	render : function () {
            var self = this;
    		$(this.el).append("<button id='add'>Add list item</button>");
    		$(this.el).append("<ul> </ul>");
            _(this.collection.models).each(function(item){
                this.appendItem(item);
            }, this);
    	},
    
    	addItem : function () {
    		this.counter++;
            var item = new Item();
            item.set({
                part2 : item.get('part2') + this.counter
            });
            this.collection.add(item);
    		// $('ul', this.el).append("<li>hello world" + this.counter + "</li>");
    	},
        
        appendItem : function (item) {
            $('ul', this.el).append("<li>"+item.get('part1')+" "+item.get('part2')+"</li>");
        }
	});

	
    var listView = new ListView();
    
})(jQuery);
