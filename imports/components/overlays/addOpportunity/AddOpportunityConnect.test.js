import AddOpportunityConnect, * as AOC from './AddOpportunityConnect';

describe('AddOpportunityConnect.js', () => {
  describe('mapStateToProps Function', () => {
    it('maps state to props', () => {
      expect(AOC.mapStateToProps()).toEqual({});
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('maps dispatch to props', () => {
      expect(AOC.mapDispatchToProps()).toEqual({});
    });
  });
  describe('AddOpportunityConnect Component', () => {
    it('connects AddOpportunityDisplay', () => {
      expect(AddOpportunityConnect.displayName).toBe(
        'Connect(AddOpportunityDisplay)'
      );
    });
  });
});
