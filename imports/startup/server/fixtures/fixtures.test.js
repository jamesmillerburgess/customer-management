import FieldOptions from '../../../api/fieldOptions/fieldOptionsCollection.js';
import FieldLists from '../../../api/fieldList/fieldListCollection.js';
import runFixtures from './fixtures.js';

describe('runFixtures', () => {
  it('does not throw', () => {
    expect(runFixtures).not.toThrow();
  });
  it('does not populate FieldOptions if some exist', () => {
    FieldOptions.docs = [{}];
    FieldOptions.num = 1;
    expect(FieldOptions.count()).toBe(1);
    runFixtures();
    expect(FieldOptions.count()).toBe(1);
  });
  it('populates FieldOptions if none exist', () => {
    FieldOptions.docs = [];
    FieldOptions.num = 0;
    expect(FieldOptions.count() === 0).toBe(true);
    runFixtures();
    expect(FieldOptions.count() > 0).toBe(true);
  });
  it('does not populate FieldLists if some exist', () => {
    FieldLists.docs = [{}];
    FieldLists.num = 1;
    expect(FieldLists.count()).toBe(1);
    runFixtures();
    expect(FieldLists.count()).toBe(1);
  });
  it('populates FieldLists if none exist', () => {
    FieldLists.docs = [];
    FieldLists.num = 0;
    expect(FieldLists.count() === 0).toBe(true);
    runFixtures();
    expect(FieldLists.count() > 0).toBe(true);
  });
});
