import Ember from 'ember';

export default Ember.Component.extend({
  trophyCollection: Ember.inject.service(),
  actions: {
    checkCode(user, targets, users) {
      var params = {
        inputCode: this.get('inputCode')
      };
      this.sendAction('checkCode', params, user, targets, users);
    }
  }
});
