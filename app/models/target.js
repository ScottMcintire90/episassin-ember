import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
<<<<<<< HEAD
  username: attr(),
  user: belongsTo('user')
=======
  target: attr(),
  attacker: belongsTo('user', { async:true })
>>>>>>> 25e7340ee5eee3287a933e773a1fe3e10058c7f6
});
