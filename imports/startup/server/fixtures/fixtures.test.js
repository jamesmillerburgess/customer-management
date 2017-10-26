import FieldOptions from '../../../api/fieldOptions/fieldOptionsCollection.js';
import FieldLists from '../../../api/fieldList/fieldListCollection.js';
import runFixtures from './fixtures.js';

describe('runFixtures', () => {
  it('does not throw', () => {
    expect(runFixtures).not.toThrow();
  });
  it('populates FieldOptions', () => {
    FieldOptions.docs = [];
    FieldOptions.num = 0;
    expect(FieldOptions.count() === 0).toBe(true);
    runFixtures();
    expect(FieldOptions.count() > 0).toBe(true);
  });
  it('populates FieldLists', () => {
    FieldLists.docs = [];
    FieldLists.num = 0;
    expect(FieldLists.count() === 0).toBe(true);
    runFixtures();
    expect(FieldLists.count() > 0).toBe(true);
  });
});
