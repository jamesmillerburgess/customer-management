import { Meteor } from 'meteor/meteor';

import OwnedTeamsConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './OwnedTeamsConnect';

describe('OwnedTeamsConnect Component', () => {
  it('connects CompaniesContainer', () => {
    expect(OwnedTeamsConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('maps newTeamName and rowSelection directly from state', () => {
    const state = {
      profile: { newTeamName: 'a', ownedTeamsRowSelection: ['b'] },
    };
    const ownProps = { ownedTeams: [] };
    expect(mapStateToProps(state, ownProps).newTeamName).toEqual('a');
    expect(mapStateToProps(state, ownProps).rowSelection).toEqual(['b']);
  });
  it('loads in defaults if values are not in the state', () => {
    const state = { profile: {} };
    const ownProps = { ownedTeams: [] };
    expect(mapStateToProps(state, ownProps).newTeamName).toEqual('');
    expect(mapStateToProps(state, ownProps).rowSelection).toEqual([]);
  });
  it('sets areAnySelected if any rows are set to true', () => {
    const state = { profile: { ownedTeamsRowSelection: [] } };
    const ownProps = { ownedTeams: [] };
    expect(mapStateToProps(state, ownProps).areAnySelected).toEqual(false);
    state.profile.ownedTeamsRowSelection = [false, true];
    expect(mapStateToProps(state, ownProps).areAnySelected).toEqual(true);
    state.profile.ownedTeamsRowSelection = [false, false];
    expect(mapStateToProps(state, ownProps).areAnySelected).toEqual(false);
  });
  it('sets numSelectedRows to the number of rows set to true', () => {
    const state = { profile: { ownedTeamsRowSelection: [] } };
    const ownProps = { ownedTeams: [] };
    expect(mapStateToProps(state, ownProps).numSelectedRows).toEqual(0);
    state.profile.ownedTeamsRowSelection = [false, true];
    expect(mapStateToProps(state, ownProps).numSelectedRows).toEqual(1);
    state.profile.ownedTeamsRowSelection = [false, false];
    expect(mapStateToProps(state, ownProps).numSelectedRows).toEqual(0);
    state.profile.ownedTeamsRowSelection = [true, true];
    expect(mapStateToProps(state, ownProps).numSelectedRows).toEqual(2);
  });
  it('sets areAllSelected to true if there is at least one ownedTeam and all rows are set to true', () => {
    const state = { profile: { ownedTeamsRowSelection: [] } };
    const ownProps = { ownedTeams: [] };
    expect(mapStateToProps(state, ownProps).areAllSelected).toEqual(false);
    state.profile.ownedTeamsRowSelection = [false, true];
    expect(mapStateToProps(state, ownProps).areAllSelected).toEqual(false);
    ownProps.ownedTeams = [{}];
    state.profile.ownedTeamsRowSelection = [true, true];
    expect(mapStateToProps(state, ownProps).areAllSelected).toEqual(true);
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps dispatchers to props', () => {
    const dispatch = jest.fn();
    const ownProps = { ownedTeams: [{}] };
    const props = mapDispatchToProps(dispatch, ownProps);
    expect(props.setAllRowSelection).not.toThrow();
    expect(props.setRowSelection).not.toThrow();
    expect(props.setNewTeamName).not.toThrow();
    expect(() => props.deleteRowSelection([{}])).not.toThrow();
    expect(props.createTeam).not.toThrow();
    expect(props.removeTeam).not.toThrow();
  });
  it('handles errors', () => {
    const dispatch = jest.fn();
    const ownProps = { ownedTeams: [{}] };
    const props = mapDispatchToProps(dispatch, ownProps);
    Meteor.err = 'err';
    expect(() => props.deleteRowSelection([{}])).not.toThrow();
    expect(props.createTeam).not.toThrow();
    expect(props.removeTeam).not.toThrow();
  });
});
