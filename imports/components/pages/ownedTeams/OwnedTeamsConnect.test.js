import { Meteor } from 'meteor/meteor';

import OwnedTeamsConnect, {
  mapStateToProps,
  mapDispatchToProps,
  selectId,
} from './OwnedTeamsConnect';

describe('OwnedTeamsConnect Component', () => {
  it('connects CompaniesContainer', () => {
    expect(OwnedTeamsConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('maps newTeamName and rowSelection directly from state', () => {
    const state = {
      profile: { newTeamName: 'a' },
    };
    const ownProps = { ownedTeams: [] };
    expect(mapStateToProps(state, ownProps).newTeamName).toEqual('a');
  });
  it('loads in defaults if values are not in the state', () => {
    const state = { profile: {} };
    const ownProps = { ownedTeams: [] };
    expect(mapStateToProps(state, ownProps).newTeamName).toEqual('');
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps dispatchers to props', () => {
    const dispatch = jest.fn();
    const ownProps = { ownedTeams: [{ _id: 'a' }] };
    const props = mapDispatchToProps(dispatch, ownProps);
    expect(props.setAllRowSelection).not.toThrow();
    expect(props.setRowSelection).not.toThrow();
    expect(props.setNewTeamName).not.toThrow();
    expect(props.createTeam).not.toThrow();
  });
  it('handles errors', () => {
    const dispatch = jest.fn();
    const ownProps = { ownedTeams: [{}] };
    const props = mapDispatchToProps(dispatch, ownProps);
    Meteor.err = 'err';
    expect(props.createTeam).not.toThrow();
  });
});
describe('selectId function', () => {
  it('selects the _id property', () => {
    expect(selectId({ _id: 'a' })).toBe('a');
  });
});
