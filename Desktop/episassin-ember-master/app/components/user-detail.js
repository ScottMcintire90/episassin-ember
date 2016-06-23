import Ember from 'ember';

export default Ember.Component.extend({
  trophyCollection: Ember.inject.service(),
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  actions: {
    killUser(user) {
      this.set('user.dead', true);
      this.sendAction('saveKill', user);
    }
  }
});