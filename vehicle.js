var Vehicle = Backbone.Model.extend({
        initialize: function(){
            console.log("Vehicle created");
        },
        
        asString: function(){
            return JSON.stringify(this.toJSON());
        }
    },
    {
        summary: function(){
            return 'Vehicles are awesome';
        }
    }
);

var car = new Vehicle({
    brand: 'Mercedes',
    color: 'red'
});

var Sedan = Vehicle.extend({});

var car2 = new Sedan();

console.log(car2.asString());