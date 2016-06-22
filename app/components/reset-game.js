import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    reset(user, target) {
      var confirmed = true;
      //var confirmed = confirm("Are you sure you'd like to reset the game? All user information will be erased.");
      if (confirmed) {
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
        //alert("Game has been reset.");
        console.log(randoms);
        for(var i = 0; i < randoms.length; i++){
          user.findBy("id", "" + i + "").set('target', target.findBy("id", "" + randoms[i] + ""));
          user.findBy("id", "" + i + "").save();
          console.log(randoms[i]);
          target.findBy("id", "" + randoms[i] + "").set('user', user.findBy("id", "" + i + ""));
          target.findBy("id", "" + randoms[i] + "").save();
        }
      }

    }


  }
});

// user.findBy("id", "3").get('username');

//var userNames = users.getEach('username');
//var numUsers = userNames.length;
