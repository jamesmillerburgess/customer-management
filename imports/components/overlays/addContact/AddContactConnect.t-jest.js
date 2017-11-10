import AddContactConnect, * as ACC from './AddContactConnect';

describe('AddContactConnect.js', () => {
  describe('mapStateToProps Function', () => {
    it('maps state to props', () => {
      expect(ACC.mapStateToProps()).toEqual({});
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('maps dispatch to props', () => {
      expect(ACC.mapDispatchToProps()).toEqual({});
    });
  });
  describe('AddContactConnect Component', () => {
    it('connects AddContactDisplay', () => {
      expect(AddContactConnect.displayName).toBe('Connect(AddContactDisplay)');
    });
  });
});
