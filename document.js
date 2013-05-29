var documents = [
    new Backbone.Model({
        title: 'JS modules',
        content: 'we are using js modules to include the content'
    }),
    new Backbone.Model({
        title: 'Backbone',
        content: 'backbone has view, model, collection and route'
    })
];


var DocumentListView = Backbone.View.extend({
    tagName: 'ul',
    render: function () {
        _(this.collection).each(function(document){
            this.$el.append(new DocumentRowView({model: document}).render().el);
        }, this);
        return this;
    }
});

var DocumentRowView = Backbone.View.extend({
    tagName: 'li',
    events: {
        'click' : function () {
            eventAggregator: trigger('document:selected', this.model);
        }
    },
    render: function () {
        this.$el.html(this.model.get('title') + ' - ' + this.model.get('content'));
        return this;
    }
});


var DocumentView = Backbone.View.extend({
    render: function() {
        this.$el.append(this.make('h1', null, this.model.get('title')));
        this.$el.append(this.make('div', null, this.model.get('content')));
        return this;
    }
});

var DocumentRouter = Backbone.Router.extend({
    routes: {
        'contents': 'contents',
        'view/:title': 'viewDocument'
    },
    contents : function () {
        $('body').html(new DocumentListView({collection: documents}).render().el);
    },
    viewDocument: function (title) {
        var selectedDocument = _(documents).find(function(document) {
            return document.get('title') === title;
        });
        
        $('body').empty().append(new DocumentView({model: selectedDocument.render().el}));
    }
});


// eventAggregator.on('document:selected', function(document){
//     var url = 'view/' + document.get('title');
//     router.navigate(url, {trigger: true});
// });


var router = new DocumentRouter();
Backbone.history.start();

router.navigate('contents', {trigger: true});