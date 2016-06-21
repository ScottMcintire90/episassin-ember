import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    checkPassword() {
      var params = this.get('attempt');
      this.sendAction('checkPassword', params, this.get('user'));
    }
  }
});
