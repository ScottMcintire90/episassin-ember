import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      targets: this.store.findAll('target')
    })
  },

  actions: {
    reset() {
      alert("YOU DID IT");
    }
  }
});
