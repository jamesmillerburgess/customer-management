import OpportunitiesConnect, * as OC from './OpportunitiesConnect';

describe('OpportunitiesConnect.js', () => {
  describe('getOwnerFilter Function', () => {
    it('gets the owner from the opportunity table', () => {
      const state = { dataTables: { opportunity: { ownerFilter: 'a' } } };
      expect(OC.getOwnerFilter(state)).toBe('a');
    });
    it('handles missing parameters and properties', () => {
      expect(OC.getOwnerFilter()).toBe('SELF');
    });
  });
  describe('OpportunitiesConnect Component', () => {
    it('connects CompaniesContainer', () => {
      expect(OpportunitiesConnect).toBeInstanceOf(Function);
    });
  });
  describe('matchStateToProps Function', () => {
    it('returns an empty object', () => {
      const state = { dataTables: { opportunity: { ownerFilter: 'a' } } };
      expect(OC.mapStateToProps(state)).toEqual({ ownerFilter: 'a' });
      state.dataTables.opportunity.ownerFilter = null;
      expect(OC.mapStateToProps(state)).toEqual({ ownerFilter: 'SELF' });
    });
  });
  describe('matchDispatchToProps Function', () => {
    it('returns the openOverlay function', () => {
      const dispatch = jest.fn();
      const ownProps = {};
      expect(
        OC.mapDispatchToProps(dispatch, ownProps).openOverlay
      ).not.toThrow();
    });
  });
});
