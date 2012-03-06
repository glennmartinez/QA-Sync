App.ShowReleaseView = Ember.View.extend({
  templateName: 'app/templates/releases/show',
  //classNames:   ['show-release'],
  classNameBindings: ['isSelected'],

//  tagName:      'tr',

  click: function() {
    // this.showEdit();
   // this.showRelease();
    var release = this.get("release");

    App.selectedReleaseController.set("release", release);
  },

  isSelected: function(){
    var selectedItem = App.selectedReleaseController.get("release");
    release = this.get("release");

    if (release === selectedItem) {return true; }

  }.property("App.selectedReleaseController.release")

  // showEdit: function() {
  //   this.set('isEditing', true);
  // },

  // hideEdit: function() {
  //   this.set('isEditing', false);
  // },

  // destroyRecord: function() {
  //   var release = this.get("release");

  //   release.destroyResource()
  //     .fail( function(e) {
  //       App.displayError(e);
  //     })
  //     .done(function() {
  //       App.releasesController.removeObject(release);
  //     });
  // }
});