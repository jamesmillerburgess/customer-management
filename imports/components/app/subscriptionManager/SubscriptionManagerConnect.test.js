import { Meteor } from 'meteor/meteor';
import SubscriptionManagerConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './SubscriptionManagerConnect';

describe('SubscriptionManagerConnect Component', () => {
  it('connects', () => {
    expect(SubscriptionManagerConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('substitutes an empty string if there is no team on the user', () => {
    const state = { app: {} };
    Meteor.loggedInUser = { profile: { team: 'a' } };
    expect(mapStateToProps(state).subscriptions.teams[1]).toBe('a');
    expect(mapStateToProps(state).subscriptions.teamActivity[1]).toBe('a');
    expect(mapStateToProps(state).subscriptions.opportunityForecast[1]).toBe(
      'a'
    );
    Meteor.loggedInUser = null;
    expect(mapStateToProps(state).subscriptions.teams[1]).toBe('');
    expect(mapStateToProps(state).subscriptions.teamActivity[1]).toBe('');
    expect(mapStateToProps(state).subscriptions.opportunityForecast[1]).toBe(
      ''
    );
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    expect(props).toEqual({});
  });
});
