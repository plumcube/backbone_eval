// **This example illustrates the declaration and instantiation of a minimalist View.**
// (function($){
var data = {
    'list': {
        'html': '<button id="add">Add Item to List</button><table id="container"><tr><th>Name</th><th>Status</th><th>Response Time</th><th>Rate</th></tr></table>'
    },
        'item': {
        'html': '<td><%= fullname %></td><td><%= status %></td><td><%= responsetime %></td><td><%= rate %></td><td><a class="remove" href="#">Remove</a></td>'
    }
};
Backbone.sync = function (method, model, success, error) {
    success();
};
var Item = Backbone.Model.extend({
    defaults: {
        'firstname': 'TEST',
        'lastname': 'Ng',
        'fullname': 'Ben Ng',
        'rate': '$500',
        'expertise': 'The Internet',
        'location': 'NY, NY',
        'status': '',
        'responsetime': '',
        'translator': false,
        'confirmation': true,
        'rating': '',
        'pmrating': ''
    }
});
var List = Backbone.Collection.extend({
    model: Item
});
var ItemView = Backbone.View.extend({
    tagName: 'tr',
    events: {
        'click a.remove': 'remove'
    },
    initialize: function () {
        _.bindAll(this, 'render', 'unrender', 'remove');
        this.model.bind('remove', this.unrender);
    },
    render: function () {
        $(this.el).html(_.template(data.item.html, this.model.attributes));
        return this;
    },
    unrender: function () {
        $(this.el).remove();
    },
    remove: function () {
        this.model.destroy();
    }
});
// **ListView class**: Our main app view.
var ListView = Backbone.View.extend({
    template: _.template(data.list.html),
    events: {
        'click button#add': 'addItem'
    },
    el: $('body'), // attaches `this.el` to an existing element.
    // `initialize()`: Automatically called upon instantiation. Where you make all types of bindings, _excluding_ UI events, such as clicks, etc.
    initialize: function (a) {
        _.bindAll(this, 'render', 'addItem', 'appendItem'); // fixes loss of context for 'this' within methods
        this.collection = new List();
        this.collection.bind('add', this.appendItem); // collection event binder
        this.collection.add(a);
        this.render(); // not all views are self-rendering. This one is.
    },
    // `render()`: Function in charge of rendering the entire view in `this.el`. Needs to be manually called by the user.
    render: function () {
        var self = this;
        $(this.el).html(this.template());
        _(this.collection.models).each(function (item) { // in case collection is not empty
            self.appendItem(item);
        }, this);
    },
    // addItem()
    addItem: function () {
        var item = new Item();
        this.collection.add(item); // add item to collection; view is updated via event 'add'
    },
    // appendItem()
    appendItem: function (item) {
        var itemView = new ItemView({
            model: item
        });
        $('table#container', this.el).append(itemView.render().el);
    }
});
// **listView instance**: Instantiate main app view.
// $.ajax('http://ec2-54-234-74-165.compute-1.amazonaws.com:8080/getpersons', {
//     dataType: 'json',
//     success: function (a) {
//         var listView = new ListView(a);
//     }
// });
//})(jQuery);

a = {fullname: 'Chris H.'};
var listView = new ListView(a);

