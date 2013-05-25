var Vehicle = Backbone.Model.extend({
        initialize: function(){
            console.log("Vehicle created");
        }
    },
    {
        summary: function(){
            return 'Vehicles are awesome';
        }
    }
);

var v1 = new Vehicle();
var v2 = new Vehicle();

v1.prop1 = 'one';

console.log(Vehicle.summary());
console.log(v2);