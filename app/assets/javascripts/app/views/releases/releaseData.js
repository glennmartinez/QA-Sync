App.ReleaseDataView = Ember.View.extend({
  templateName:    'app/templates/releases/releaseData',
  releaseBinding: 'App.selectedReleaseController.release',
  classNames: ['releases'],

 
});