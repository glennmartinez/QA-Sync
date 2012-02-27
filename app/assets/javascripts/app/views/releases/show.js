App.ShowReleaseView = Ember.View.extend({
  templateName: 'app/templates/releases/show',
  classNames:   ['show-release'],
  tagName:      'tr',

  doubleClick: function() {
    this.showEdit();
  },

  showEdit: function() {
    this.set('isEditing', true);
  },

  hideEdit: function() {
    this.set('isEditing', false);
  },

  destroyRecord: function() {
    var release = this.get("release");

    release.destroyResource()
      .fail( function(e) {
        App.displayError(e);
      })
      .done(function() {
        App.releasesController.removeObject(release);
      });
  }
});