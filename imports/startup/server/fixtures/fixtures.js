import FieldOptions from '../../../api/fieldOptions/fieldOptionsCollection.js';
import FieldLists from '../../../api/fieldList/fieldListCollection.js';
import * as DEFAULTS from './defaults';

const runFixtures = () => {
  FieldOptions.remove({});
  DEFAULTS.FIELD_OPTIONS.forEach(fieldOptions =>
    FieldOptions.insert(fieldOptions)
  );
  FieldLists.remove({});
  DEFAULTS.FIELD_LISTS.forEach(fieldList => {
    FieldLists.insert(fieldList);
  });
};

export default runFixtures;
