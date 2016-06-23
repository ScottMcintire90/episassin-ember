import Ember from 'ember';

export default Ember.Route.extend({
  userKilled: Ember.computed('user.dead', function() {
    return this.get('user.dead');
  }),
  model(){
    return Ember.RSVP.hash({
      users: this.store.findAll('user'),
      targets: this.store.findAll('target')
    });
  },
});
