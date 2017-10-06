import FieldOptions from '../../../api/fieldOptions/fieldOptionsCollection.js';
import * as DEFAULTS from './defaults';
const runFixtures = () => {
  if (!FieldOptions.findOne()) {
    FieldOptions.insertMany(DEFAULT_FIELD_OPTIONS);
  }
};

export default runFixtures;
