import Ember from 'ember';
export default Ember.Route.extend({
  model(params) {
    return Ember.RSVP.hash({
      targets: this.store.findAll('target'),
      users: this.store.findAll('user'),
      user: this.store.findRecord('user', params.user_id)
    });

  },

  actions: {
    checkCode(params, user, targets, users) {
      var targetName = user.get('target').get('username');
      var targetObject = targets.findBy('username', "" + targetName + "");
      var killedUser = users.findBy('username', "" + targetName + "");
      var newTargetID = killedUser.get('target.id');
      var newTarget = targets.findBy('id', "" + newTargetID + "");
      targetObject.set('user', 99);
      user.set('target', killedUser.get('target'));
      user.set('kill', parseInt(user.get('kill'))+1);
      killedUser.set('dead', true);
      newTarget.set('user', "" + user.id + "")
      killedUser.set('target', "undefined");
      user.save();
      killedUser.save();
    }
  }

});

// user.get('target').get('user').get('username')
