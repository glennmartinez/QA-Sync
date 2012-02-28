App.ListReleasesView = Ember.View.extend({
  templateName:    'app/templates/releases/list',
  releasesBinding: 'App.releasesController',

  showNew: function() {
    this.set('isNewVisible', true);
  },

  hideNew: function() {
    this.set('isNewVisible', false);

  },

  refreshListing: function() {
    App.releasesController.findAll();
  }
});