import FieldLists from '../../../api/fieldList/fieldListCollection';
import * as OE from './ObjectEditors';

describe('ObjectEditors', () => {
  describe('getProperties Function', () => {
    it('uses the fieldlist if there is one', () => {
      FieldLists.docs = [{ fields: ['a'] }];
      expect(OE.getProperties('a')).toEqual(['a']);
    });
    it('returns an empty array if there is no fieldlist', () => {
      FieldLists.docs = [];
      expect(OE.getProperties('a')).toEqual([]);
    });
  });
});
