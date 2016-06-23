import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    reset(user, target) {
      var confirmed = confirm("Are you sure you'd like to reset the game? All user information will be erased.");
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
        for(var i = 0; i < randoms.length; i++){
<<<<<<< HEAD
          user.findBy("id", "" + i + "").set('target', target.findBy("id", "" + randoms[i] + ""));
          user.findBy("id", "" + i + "").set('kill', 0);
          user.findBy("id", "" + i + "").set('dead', false);
          user.findBy("id", "" + i + "").save();
          target.findBy("id", "" + randoms[i] + "").set('user', user.findBy("id", "" + i + ""));
          target.findBy("id", "" + randoms[i] + "").save();
=======
          if(user.findBy("id", "" + i + "").get('id') != randoms[i]){
            user.findBy("id", "" + i + "").set('target', target.findBy("id", "" + randoms[i] + ""));
            user.findBy("id", "" + i + "").set('kill', "0");
            user.findBy("id", "" + i + "").set('dead', "false");
            user.findBy("id", "" + i + "").save();
            target.findBy("id", "" + randoms[i] + "").set('user', user.findBy("id", "" + i + ""));
            target.findBy("id", "" + randoms[i] + "").save();
          }
>>>>>>> master
        }
      }
    }
  }
});
