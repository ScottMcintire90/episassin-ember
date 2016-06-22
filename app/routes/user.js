import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      user: this.store.findRecord('user', params.user_id),
      users: this.store.findAll('user'),
      targets: this.store.findAll('target')
    });
  },

  actions: {
    saveKill(user) {
      user.save();
    },
    checkCode(params, user, targets, users) {
      var targetName = user.get('target').get('username');
      var targetObject = targets.findBy('username', "" + targetName + "");
      var killedUser = users.findBy('username', "" + targetName + "");
      user.set('target', killedUser.get('target'));
      user.set("kill", parseInt(user.get('kill'))+1);
      killedUser.set('dead', true);
      targetObject.set('user', null);
      killedUser.set('target', "undefined");
      user.save();
      killedUser.save();
      console.log(user.get('kill'));
    }
  }
});

// user.get('target').get('user').get('username')
