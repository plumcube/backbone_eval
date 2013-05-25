(function () {
    
    var Rectangle = Backbone.Model.extend({});
    
    var RectangleView = Backbone.View.extend({
        tagName : 'div',
        className : 'rectangle',
        
        render : function() {
            this.setDimensions();
            this.setPosition();
            return this;
        },
        
        setDimensions : function() {
            this.$el.css({
                width: this.model.get("width") + "px",
                height: this.model.get("height") + "px",
                // border: "4px solid black",
                // position: "absolute"
                
            });
        },
        
        setPosition: function() {
            var position = this.model.get("position");
            this.$el.css({
                left: position.x,
                top: position.y
            });
        }
    });
    
    var rectangle1 = new Rectangle({
        width: 200,
        height: 180,
        position: {
            x: 40, 
            y: 100
        }
    });
    
    var mainView = new RectangleView({
        model: rectangle1
    });
    
    console.log(mainView.render().el);
    $("div#canvas").append(mainView.render().el);
    
})();