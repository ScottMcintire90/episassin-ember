import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    checkCode(user, targets, users) {
      var params = {
        inputCode: this.get('inputCode')
      };
      this.sendAction('checkCode', params, user, targets, users);
    }
  }
});
