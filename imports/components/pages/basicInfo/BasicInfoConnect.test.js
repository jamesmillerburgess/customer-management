import BasicInfoConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './BasicInfoConnect';

describe('BasicInfoConnect Component', () => {
  it('connects CompaniesContainer', () => {
    expect(BasicInfoConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('maps state to props', () => {
    const state = {
      app: { loading: false },
      profile: { username: 'a', team: 'b', hasLoaded: true },
      other: 'b',
    };
    expect(mapStateToProps(state)).toEqual({
      loading: false,
      username: 'a',
      team: 'b',
      hasLoaded: true,
    });
  });
  it('loads in defaults if values are not in the state', () => {
    const state = {
      app: {},
      profile: {},
      other: 'b',
    };
    expect(mapStateToProps(state)).toEqual({
      loading: true,
      username: '',
      team: '',
      hasLoaded: false,
    });
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps dispatchers to props', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch, { overlay: 'a' });
    expect(props.setUsername).not.toThrow();
    expect(props.setTeam).not.toThrow();
    expect(props.saveProfile).not.toThrow();
    expect(props.setHasLoaded).not.toThrow();
  });
});
