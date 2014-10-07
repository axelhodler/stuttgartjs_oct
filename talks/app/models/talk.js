import DS from 'ember-data';

export default DS.Model.extend({
  speaker: DS.attr(),
  topic: DS.attr()
});
