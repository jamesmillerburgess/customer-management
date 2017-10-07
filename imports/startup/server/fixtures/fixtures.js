import FieldOptions from '../../../api/fieldOptions/fieldOptionsCollection.js';
import * as DEFAULTS from './defaults';
const runFixtures = () => {
  if (!FieldOptions.findOne()) {
    DEFAULTS.FIELD_OPTIONS.forEach(fieldOptions =>
      FieldOptions.insert(fieldOptions)
    );
  }
};

export default runFixtures;
