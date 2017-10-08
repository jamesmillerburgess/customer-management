import FieldOptions from '../../../api/fieldOptions/fieldOptionsCollection.js';
import FieldLists from '../../../api/fieldList/fieldListCollection.js';
import * as DEFAULTS from './defaults';

const runFixtures = () => {
  if (!FieldOptions.findOne()) {
    DEFAULTS.FIELD_OPTIONS.forEach(fieldOptions =>
      FieldOptions.insert(fieldOptions)
    );
  }
  if (!FieldLists.findOne()) {
    DEFAULTS.FIELD_LISTS.forEach(fieldList => {
      FieldLists.insert(fieldList);
    });
  }
};

export default runFixtures;
