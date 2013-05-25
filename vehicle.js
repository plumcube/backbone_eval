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


console.log(car);
console.log(car.toJSON());
console.log(JSON.stringify(car.toJSON()));