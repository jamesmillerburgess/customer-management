import { Meteor } from 'meteor/meteor';
import AppConnect, { mapStateToProps, mapDispatchToProps } from './AppConnect';

describe('AppConnect Component', () => {
  it('connects AppDisplay', () => {
    expect(AppConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { app: {}, other: 'b' };
    expect(mapStateToProps(state).isOverlayOpen).toEqual(false);
    state.app.isOverlayOpen = true;
    expect(mapStateToProps(state).isOverlayOpen).toEqual(true);
  });
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
