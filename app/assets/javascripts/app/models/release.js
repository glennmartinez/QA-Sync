App.Release  = Ember.Resource.extend({
  resourceUrl: '/releases',
  resourceName: 'release',
  resourceProperties: ['name', 'description'],

  validate: function() {
    if (this.get('name') === undefined || this.get('name') === '' ||
        this.get('description') === undefined  || this.get('description') === '') {
      return 'Releases require a name and description.';
    }
  },

  fullData: Ember.computed(function() {
    return this.get('name') + ' ' + this.get('description') ;
  }).property('name', 'description' )
});