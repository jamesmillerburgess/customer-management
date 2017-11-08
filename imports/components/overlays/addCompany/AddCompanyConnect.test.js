import AddCompanyConnect, * as ACC from './AddCompanyConnect';

import FieldLists from '../../../api/fieldList/fieldListCollection';

describe('AddCompanyConnect.js', () => {
  describe('getEntryMode Function', () => {
    it('gets the entry mode or defaults to GOOGLE_PLACES', () => {
      expect(ACC.getEntryMode({ entryMode: 'a' })).toBe('a');
      expect(ACC.getEntryMode({})).toBe('GOOGLE_PLACES');
      expect(ACC.getEntryMode()).toBe('GOOGLE_PLACES');
    });
  });
  describe('getPage Function', () => {
    it('gets the page or defaults to ADD_COMPANY_GOOGLE_PLACES', () => {
      expect(ACC.getPage('MANUAL_ENTRY')).toBe('COMPANY_PROPERTIES');
      expect(ACC.getPage('GOOGLE_PLACES')).toBe('ADD_COMPANY_GOOGLE_PLACES');
      expect(ACC.getPage('')).toBe('ADD_COMPANY_GOOGLE_PLACES');
    });
  });
  describe('getLat Function', () => {
    it('gets lat', () => {
      expect(ACC.getLat({ parsedPlace: { lat: 1 } })).toBe(1);
      expect(ACC.getLat({ parsedPlace: {} })).toBe(undefined);
      expect(ACC.getLat({})).toBe(undefined);
      expect(ACC.getLat()).toBe(undefined);
    });
  });
  describe('getLng Function', () => {
    it('gets lng', () => {
      expect(ACC.getLng({ parsedPlace: { lng: 1 } })).toBe(1);
      expect(ACC.getLng({ parsedPlace: {} })).toBe(undefined);
      expect(ACC.getLng({})).toBe(undefined);
      expect(ACC.getLng()).toBe(undefined);
    });
  });
  describe('mapStateToProps Function', () => {
    it('maps state to props', () => {
      const state = { overlay: { a: 'x' } };
      FieldLists.docs = [
        { fields: [{ name: 'a', default: 'b' }, { name: 'c', default: 'd' }] },
      ];
      expect(() => ACC.mapStateToProps(state)).not.toThrow();
      FieldLists.docs = [];
      expect(() => ACC.mapStateToProps(state)).not.toThrow();
      expect(
        ACC.mapStateToProps({ overlay: { showErrorMessage: true } })
          .errorMessageClass
      ).toBe('show');
      expect(
        ACC.mapStateToProps({ overlay: { showErrorMessage: false } })
          .errorMessageClass
      ).toBe('hide');
    });
  });
  describe('isEstablishment Function', () => {
    it('checks if establishment is in types', () => {
      expect(ACC.isEstablishment({ types: ['establishment'] })).toBe(true);
      expect(ACC.isEstablishment({ types: ['', 'establishment'] })).toBe(true);
      expect(ACC.isEstablishment({ types: [''] })).toBe(false);
    });
  });
  describe('parsePlace Function', () => {
    it('extracts and flattens the place properties', () => {
      const place = {
        types: ['establishment'],
        place_id: 'a',
        name: 'b',
        formatted_address: 'c',
        website: 'd',
        international_phone_number: 'e',
        geometry: {
          location: {
            lat: () => 'f',
            lng: () => 'g',
          },
        },
      };
      expect(ACC.parsePlace(place)).toEqual({
        placeId: 'a',
        name: 'b',
        address: 'c',
        website: 'd',
        phoneNumber: 'e',
        lat: 'f',
        lng: 'g',
      });
    });
    it('throws if the place is not an establishment', () => {
      expect(() => ACC.parsePlace({ types: [] })).toThrow();
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('maps dispatch to props', () => {
      const dispatch = jest.fn();
      const props = ACC.mapDispatchToProps(dispatch);
      expect(props.setEntryMode).not.toThrow();
      jest.useFakeTimers();
      expect(props.setPlace).not.toThrow();
      expect(setTimeout.mock.calls.length).toBe(1);
      expect(setTimeout.mock.calls[0][1]).toBe(5000);
      jest.runAllTimers();
      expect(() =>
        props.setPlace({
          types: ['establishment'],
          geometry: { location: { lat: () => null, lng: () => null } },
        })
      ).not.toThrow();
    });
  });
  describe('AddCompanyConnect Component', () => {
    it('connects AddCompanyDisplay', () => {
      expect(AddCompanyConnect.displayName).toBe('Connect(AddCompanyDisplay)');
    });
  });
});
