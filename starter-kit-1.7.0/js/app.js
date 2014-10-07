App = Ember.Application.create();

App.Router.map(function() {
  this.route('about');
  this.route('food');
});

App.FoodRoute = Ember.Route.extend({
  model: function() {
    return ["apples", "oranges", "strawberry"];
  }
});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON("https://api.github.com/repos/stefanpenner/ember-cli/pulls");
  }
});
