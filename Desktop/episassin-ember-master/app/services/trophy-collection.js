import Ember from 'ember';

export default Ember.Service.extend({
  targets: [],
  add(target) {
    this.get('targets').pushObject(target);
  }
});
