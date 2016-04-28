//App Collections


//Coffee collection //

Coffees = new Mongo.Collection('Coffees');

Coffees.attachSchema(new SimpleSchema({

    coffeeName: {
        type: String,
        max: 100
    },
    coffeeShop: {
        type: String,
        max: 100
    },
    coffeePrice: {
        type: String
    },
    userId: {
        type: String,
        autoValue: function(){ return Meteor.userId() }
    },

    coffeeRating: {
        type: Number,
        max: 5,
        optional: true
    },
    coffeeFavourite: {
        type: Boolean,
        optional: true
    },
    lat:{
        type: Number,
        decimal: true,
        optional: true
    },
    lng:{
        type: Number,
        decimal: true,
        optional: true
    }

}));


//Markers = new Mongo.Collection('Markers');
//
//
//Markers.attachSchema(new SimpleSchema({
//
//    lat:{
//        type: Number,
//        decimal: true
//    },
//
//    lng:{
//        type: Number,
//        decimal: true
//    }
//}));
//
//Markers.allow({
//    insert:function(){
//        return true;
//    },
//    update:function(){
//        return true;
//    },
//    remove:function(){
//        return true;
//    }
//});

