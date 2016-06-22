import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  username: attr(),
  password: attr(),
  avatar: attr(),
  dead: attr(),
  targetNum: attr(),
  target: belongsTo('target'),
  kill: attr(),
  code: attr(),
  weapon: attr(),
  weaponImage: attr(),
  codeImage: attr(),
  dead: attr()
});
