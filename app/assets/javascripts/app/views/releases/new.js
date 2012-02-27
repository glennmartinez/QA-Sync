App.NewReleaseView = Ember.View.extend({
  tagName:      'form',
  templateName: 'app/templates/releases/edit',

  init: function() {
    this._super();
    this.set("release", App.Release.create());
  },

  didInsertElement: function() {
    this._super();
    this.$('input:first').focus();
  },

  cancelForm: function() {
    this.get("parentView").hideNew();
  },

  submit: function(event) {
    var self = this;
    var release = this.get("release");

    event.preventDefault();

    release.saveResource()
      .fail( function(e) {
        App.displayError(e);
      })
      .done(function() {
        App.releasesController.pushObject(release);
        self.get("parentView").hideNew();
      });
  }
});