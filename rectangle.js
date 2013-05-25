(function () {
    
    var Rectangle = Backbone.Model.extend({});
    
    var RectangleView = Backbone.View.extend({
        tagName: 'div',
        className: 'rectangle',
        events: {
            'click': 'move'
        },
        
        render: function(){
            this.setDimensions();
            this.setPosition();
            this.setColor();
            return this;
        },
        
        setDimensions: function(){
            this.$el.css({
                width: this.model.get("width") + "px",
                height: this.model.get("height") + "px"
            });
        },
        
        setPosition: function(){
            var position = this.model.get("position");
            this.$el.css({
                left: position.x,
                top: position.y
            });
        },
        
        setColor: function(){
            this.$el.css("background-color", this.model.get("color"));
        },
        
        move: function(){
            this.$el.css("top", this.$el.position().top + 10);
        }
    });
    
    var models = [
        new Rectangle({
            width: 200,
            height: 180,
            position: {
                x: 40, 
                y: 100
            },
            color: "orange"
        }),
        new Rectangle({
            width: 200,
            height: 40,
            position: {
                x: 40, 
                y: 400
            },
            color: "yellow"
        }),
        new Rectangle({
            width: 50,
            height: 300,
            position: {
                x: 250, 
                y: 120
            },
            color: "pink"
        }),
    ];
    
    console.log(models);
    
    _(models).each(function (model){
        $("div#canvas").append(new RectangleView({model: model}).render().el);
    });
    
    
})();