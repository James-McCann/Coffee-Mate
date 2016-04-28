if (Meteor.isClient) {
    Meteor.startup(function() {
        GoogleMaps.load();
    });
}

Template.map.helpers({
    mapOptions: function() {
        if (GoogleMaps.loaded()) {
            return {
                center: new google.maps.LatLng(52.1592956, -7.1470257),
                zoom: 13
            };
        }
    }
});


//Template.edit_coffee.helpers({
//    mapOptions: function() {
//        if (GoogleMaps.loaded()) {
//            return {
//                center: new google.maps.LatLng(52.1592956, -7.1470257),
//                zoom: 13
//            };
//        }
//    },
//    coffees : function(){
//    Coffees.find();
//   }
//});