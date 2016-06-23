import Ember from 'ember';

export default Ember.Component.extend({

  model(params) {
    return this.store.findRecord('user', params.user_id);
  },
  trophy: Ember.computed('user.kill', function() {
    var kills = parseInt(this.get('user.kill'));
    var trophies = [];

    for(var i = 0; i < kills; i++) {
      trophies.push("cheese");
    }
    return trophies;
  }),
  actions: {
    killUser(user) {
      this.set('user.dead', true);
      this.sendAction('saveKill', user);
    }
  }
});
