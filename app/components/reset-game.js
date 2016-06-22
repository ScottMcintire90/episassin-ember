import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    reset(user) {
      var confirmed = confirm("Are you sure you'd like to reset the game? All user information will be erased.");
      if (confirmed) {
        var empty = [];
        var randoms = [];
        var users = this.get('user');
        var userNames = users.getEach('username');  //returns array of usernames
        var numUsers = userNames.length;  //returns 19 for now

         while (randoms.length < numUsers) {
          var random = Math.floor(Math.random() * (numUsers) + 0);
            if (randoms.indexOf(random) === -1) {
              randoms.push(random);
              
            }
          }
        alert("Game has been reset.");
      }
    }
  }
});

//var userNames = users.getEach('username');
//var numUsers = userNames.length;
