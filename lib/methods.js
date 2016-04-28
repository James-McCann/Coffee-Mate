Meteor.methods({
    //Add coffee method
    addCoffee: function (coffeeName, coffeeShop, coffeePrice) {

        Coffees.insert({
            coffeeName: coffeeName,
            coffeeShop: coffeeShop,
            coffeePrice: coffeePrice
        });
    },


    //Edit Coffee
    editCoffee: function (id, coffeeName, coffeeShop, coffeePrice, coffeeRating,coffeeFavourite) {

        //Update  Coffee
        Coffees.update({
            _id: id
        }, {
            $set: {
                coffeeName: coffeeName,
                coffeeShop: coffeeShop,
                coffeePrice: coffeePrice,
                coffeeRating: coffeeRating,
                coffeeFavourite: coffeeFavourite
            }
        });
    },



    //Remove Coffee function
    removeCoffee: function (id) {

        Coffees.remove(id);

    },

    updateFavourite: function(id, coffeeFavourite){
        Coffees.update({
            _id: id
        }, {
            $set: {
                coffeeFavourite: coffeeFavourite
            }
        });
    }




    //addMarker: function(lat, lng) {
    //    Markers.insert({
    //        lat:lat,
    //        lng:lng
    //
    //    });
    //
    //},
    //updateMarker: function(id, lat, lng){
    //    Markers.update({
    //        _id: id
    //    },{
    //        $set:{
    //            lat: lat,
    //            lng: lng
    //        }
    //    });
    //}



});