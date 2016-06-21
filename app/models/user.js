import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  username: attr(),
  password: attr(),
  avatar: attr(),
  target: attr(),
  kill: attr(),
  code: attr()
});
