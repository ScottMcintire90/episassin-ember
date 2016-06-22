import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    reset(user) {
      // var confirmed = confirm("Are you sure you'd like to reset the game? All user information will be erased.");
        var randoms = [];
        var users = this.get('user');
        var userNames = users.getEach('username');  //returns array of usernames
        var numUsers = (userNames.length);  //returns 19 for now
        for (var i = 0; i < numUsers; i++) {
          randoms.push(i);
        };
        console.log(randoms);
        for(randoms; x=randoms.length; x--) {
          var newrandom = randoms.splice(Math.floor(Math.random() * (x + 1)), 1)[0];
        };
        console.log(newrandom);
      }
    }
});


//var userNames = users.getEach('username');
//var numUsers = userNames.length;
