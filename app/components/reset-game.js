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
            if(randoms[i] == 30){
              randoms = randoms.slice(i);
            }

            var thisUser = user.findBy('id', "" + i + "");
            var thisTarget = target.findBy('id', "" + randoms[i] + "");
            if(user.findBy('id', "" + thisUser.get('id') + "") !== user.findBy('id', "" + thisUser.get('id') + "").get('target').get('id')){
              thisUser.set('target', target.findBy("id", "" + randoms[i] + ""));
              thisUser.set('kill', "0");
              thisUser.set('dead', "false");
              thisUser.save();
              target.findBy("id", "" + randoms[i] + "").set('attacker', thisUser);
              target.findBy("id", "" + randoms[i] + "").save();

              console.log(randoms);
              console.log(thisUser.get('id') + " was assigned to " + thisUser.get('target').get('id'))

            }
          }
        }
      }
    }
});
