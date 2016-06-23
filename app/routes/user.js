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
      var enteredCode = params.inputCode;
      var targetName = user.get('target').get('target');
      var targetCode = users.findBy('username', targetName).get('code');
      if (enteredCode === targetCode) {
      //All Variables
        var attacker = user; //kendragons object userT
        var victimName = user.get('target').get('target');  //ScottMcIntire90
        var victimFromTargetTable = targets.findBy('target', "" + victimName + "");  //Scotts object targetT
        var victimFromUserTable = users.findBy('username', "" + victimName + ""); //Scotts object userT
        var nextVictimName = victimFromUserTable.get('target').get('target'); //5adiyah
        var nextVictimFromUserTable = victimFromUserTable.get('target'); //5adiyahs Object userT
        var nextVictimAttackerTargetTable = targets.findBy('target', nextVictimName);

      //1. Kendra kills scott:
      //Add 1 to kill count
        user.set('kill', parseInt(user.get('kill'))+1);
      //2. Scott is dead now
        victimFromUserTable.set('dead', true);
      //3. Scott's target is now kendra's in kendra's user object
        user.set('target', nextVictimFromUserTable);
      //4. Remove scott's target field in the user table
      //THIS MAY NOT WORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        victimFromUserTable.set('target', null);
      //5. Remove scott's attacker field in target table
      //THIS MAY NOT WORK!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        victimFromTargetTable.set('attacker', null);
      //6. Set kendra as the attacker for the new victim on the target table
        nextVictimAttackerTargetTable.set('attacker', attacker);
      //7. Save everything
        user.save();
        victimFromUserTable.save();
        victimFromTargetTable.save();
        nextVictimAttackerTargetTable.save();
        alert("success. now kill the next one.")
      } else {
        alert("That shit ain't right");
      }
    }
  }

});
