Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound'


});


//Home route
Router.map(function() {
    this.route('home', {
        path: '/',
        template: 'home'

    });


    this.route('add_coffee', {
        path: '/add_coffee',
        template: 'add_coffee'

    });


    this.route('list_coffees', {
        path: '/list_coffees',
        template: 'list_coffees',
        data: function(){
            templateData = {
                Coffees: Coffees.find({},{sort:{coffeeRating: -1}})
            };
            return templateData;
        }

    });

    this.route('edit_coffee', {
        path: '/list_coffees/:_id/edit_coffee',
        template: 'edit_coffee',
        data: function(){
            var currentCoffee = this.params._id;
            return Coffees.findOne({_id: currentCoffee});
        }
    });

    this.route('map', {
        path: '/map',
        template: 'map'

    });

});