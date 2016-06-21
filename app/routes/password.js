import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },

  actions: {
    checkPassword(params, user) {
      var password = user.get('password');
      if (password === params) {
        this.transitionTo('user', user.id);
      } else {
        alert("Incorrect password, please try again.");
      }
    }
  }
});
