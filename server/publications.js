Meteor.publish('allUsersData', function () {
    return Meteor.users.find({}, {fields: {profile: 1,
        'registered_emails.address':1,
        'services.google.picture':true}});
});

Meteor.publish("Coffees", function(){

    return Coffees.find();

});

//Meteor.publish("Markers", function(){
//
//    return Markers.find();
//
//});