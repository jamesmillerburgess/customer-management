import { Meteor } from 'meteor/meteor';
import SubscriptionManagerConnect, * as SMC from './SubscriptionManagerConnect';

describe('SubscriptionManagerConnect.js', () => {
  describe('getSubscriptionName Function', () => {
    it('gets the subscription name based on the prefix and state', () => {
      const state = { dataTables: { contact: { ownerFilter: 'SELF' } } };
      const options = { prefix: 'contact' };
      expect(SMC.getSubscriptionName(state, options)).toBe('contact.user');
      state.dataTables.contact.ownerFilter = 'TEAM';
      expect(SMC.getSubscriptionName(state, options)).toBe('contact.team');
      state.dataTables.contact.ownerFilter = 'ANY';
      expect(SMC.getSubscriptionName(state, options)).toBe('contact.any');
    });
    it('handles missing parameters and properties', () => {
      expect(SMC.getSubscriptionName()).toBe('undefined.user');
    });
  });
  describe('SubscriptionManagerConnect Component', () => {
    it('connects', () => {
      expect(SubscriptionManagerConnect).toBeInstanceOf(Function);
    });
  });
  describe('mapStateToProps Function', () => {
    it('substitutes an empty string if there is no team on the user', () => {
      const state = { app: {} };
      Meteor.loggedInUser = { profile: { team: 'a' } };
      expect(SMC.mapStateToProps(state).loading).toBe(true);
      expect(SMC.mapStateToProps(state).subscriptions.teams[1]).toBe('a');
      expect(SMC.mapStateToProps(state).subscriptions.teamActivity[1]).toBe(
        'a'
      );
      expect(
        SMC.mapStateToProps(state).subscriptions.opportunityForecast[1]
      ).toBe('a');
      Meteor.loggedInUser = null;
      state.app.loading = false;
      expect(SMC.mapStateToProps(state).loading).toBe(false);
      expect(SMC.mapStateToProps(state).subscriptions.teams[1]).toBe('');
      expect(SMC.mapStateToProps(state).subscriptions.teamActivity[1]).toBe('');
      expect(
        SMC.mapStateToProps(state).subscriptions.opportunityForecast[1]
      ).toBe('');
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('maps login dispatchers', () => {
      const dispatch = jest.fn();
      const props = SMC.mapDispatchToProps(dispatch);
      expect(props.setLoading).not.toThrow();
    });
  });
});
