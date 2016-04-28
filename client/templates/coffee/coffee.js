Template.add_coffee.events({


    'submit .add_coffee_form':function (event){
        //alert (event.target.coffeeName.value);
        var coffeeName = event.target.coffeeName.value;
        var coffeeShop = event.target.coffeeShop.value;
        var coffeePrice = event.target.coffeePrice.value;

            //Insecure package removed. Add function -  methods js to libs folder
            Meteor.call('addCoffee', coffeeName, coffeeShop, coffeePrice);

        //var lat = event.latLng.lat();
        //var lng = event.latLng.lng();
        FlashMessages.sendSuccess('Coffee Added');
        Router.go('/list_coffees');

        return false;

    }




});


Template.edit_coffee.events({
    'submit .edit_coffee_form': function () {
        //alert (event.target.coffeeName.value);
        var coffeeName = event.target.coffeeName.value;
        var coffeeShop = event.target.coffeeShop.value;
        var coffeePrice = event.target.coffeePrice.value;
        var coffeeRating = $('#rating').data('userrating');
        //var coffeeFavourite = event.target.coffeeFavourite.value;

        if (!coffeeRating) {
            //Insecure package removed. Update function -  methods js to libs folder
            Meteor.call('editCoffee', this._id, coffeeName, coffeeShop, coffeePrice);

        } else {
            Meteor.call('editCoffee', this._id, coffeeName, coffeeShop, coffeePrice, coffeeRating);

        }
        FlashMessages.sendSuccess('Coffee Updated');
        Router.go('/list_coffees');

        return false;

    },

    'click .glyphicon-star': function (event) {
        //alert(this.coffeeFavourite);
        if (this.coffeeFavourite === false || this.coffeeFavourite === undefined) {
            var coffeeFavourite = true;
            Meteor.call('updateFavourite', this._id, coffeeFavourite);
        } else if (this.coffeeFavourite === true) {
            var coffeeFavourite = false;
            Meteor.call('updateFavourite', this._id, coffeeFavourite);
        }
    }

    //update coffee to allow lat and lg cooridnates
     //'click .map-container': function() {
         //alert(this.coffeeName);
         //GoogleMaps.ready('map', function (map) {
         //    google.maps.event.addListener(map.instance, 'click', function (event) {
         //        alert(event.latLng.lat()+ ' ' + event.latLng.lng());
         //        //var lat = event.latLng.lat();
         //        //var lng = event.latLng.lng();
         //        // Markers.insert({lat: lat, lng: lng});
         //    });
         //});

     //}
});

//
//Template.edit_coffee.onCreated(function() {
//    GoogleMaps.ready('map', function (map) {
//        google.maps.event.addListener(map.instance, 'click', function (event) {
//            alert(event.latLng.lat()+ ' ' + event.latLng.lng());
//
//            //var lat = event.latLng.lat();
//            //var lng = event.latLng.lng();
//           // Markers.insert({lat: lat, lng: lng});
//        });
//    });
//});

Template.list_coffees.events({
    'click .delete_coffee': function(event){

        if(confirm("Are you sure?")){

            Meteor.call('removeCoffee', this._id);

            FlashMessages.sendSuccess('Coffee Deleted');
            return false;
        }
    },
    'click .glyphicon-star': function(event){
        if(this.coffeeFavourite === false || this.coffeeFavourite === undefined){
            var coffeeFavourite = true;
            Meteor.call('updateFavourite', this._id,coffeeFavourite);

        }else if(this.coffeeFavourite === true){
            var coffeeFavourite = false;
            Meteor.call('updateFavourite', this._id,coffeeFavourite);
        }

    }

});



//function getLatLng() {
//    google.maps.event.addListener(map, 'click', function(event){
//        //var lat = event.latLng.lat();
//        //var lng = event.latLng.lng();
//        return event.LatLng;
//    });
//}




//Template.map_add_marker.onCreated(function() {
//    GoogleMaps.ready('map', function (map) {
//        google.maps.event.addListener(map.instance, 'click', function (event) {
//            //alert(event.latLng.lat()+ ' ' + event.latLng.lng());
//            var lat = event.latLng.lat();
//            var lng = event.latLng.lng();
//            Markers.insert({lat: lat, lng: lng});
//        });
//
//        if(Markers.find().count()){
//            var allMarkers = Coffees.find();
//            allMarkers.forEach(function (marker){
//                var marker = new google.maps.Marker({
//                    animation: google.maps.Animation.DROP,
//                    position: new google.maps.LatLng(marker.lat, marker.lng),
//                    map: map.instance
//                });
//
//            });
//
//        }
//    });
//});



//Location page////////////////////////////////////////////////////////////////////////////////
//Template.map.onCreated(function() {
//    GoogleMaps.ready('map', function(map) {
//        if(Markers.find().count()){
//            var allMarkers = Markers.find();
//            allMarkers.forEach(function (marker){
//                var marker = new google.maps.Marker({
//                    animation: google.maps.Animation.DROP,
//                    position: new google.maps.LatLng(marker.lat, marker.lng),
//                    map: map.instance
//                });
//
//            });
//
//        }
//
//    });
//});











