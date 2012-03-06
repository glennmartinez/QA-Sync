// App.EditReleaseView = Ember.View.extend({
//   tagName:      'form',
//   templateName: 'app/templates/releases/edit',

//   init: function() {
//     // create a new contact that's a duplicate of the contact in the parentView;
//     // changes made to the duplicate won't be applied to the original unless
//     // everything goes well in submit()
//     var editableRelease = App.Release.create(this.get('parentView').get('release'));
//     this.set("release", editableRelease);
//     this._super();
//   },

//   didInsertElement: function() {
//     this._super();
//     this.$('input:first').focus();
//   },

//   cancelForm: function() {
//     this.get("parentView").hideEdit();
//   },

//   submit: function(event) {
//     var self = this;
//     var release = this.get("release");

//     event.preventDefault();

//     release.saveResource()
//       .fail( function(e) {
//         App.displayError(e);
//       })
//       .done( function() {
//         var parentView = self.get("parentView");
//         parentView.get("release").duplicateProperties(release);
//         parentView.hideEdit();
//       });
//   }
// });