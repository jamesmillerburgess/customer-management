import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import AddCompanyConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './AddCompanyConnect';

describe('AddCompanyConnect Component', () => {
  it('connects AddCompanyDisplay', () => {
    expect(AddCompanyConnect.displayName).toBe('Connect(AddCompanyDisplay)');
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { overlay: {}, other: 'b' };
    expect(mapStateToProps(state)).toEqual({
      name: '',
      website: '',
    });
    state.overlay.name = 'c';
    state.overlay.website = 'd';
    expect(mapStateToProps(state)).toEqual({
      name: 'c',
      website: 'd',
    });
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const ownProps = { history: { push: jest.fn() } };
    const props = mapDispatchToProps(() => null, ownProps);
    expect(props.setName).not.toThrow();
    expect(props.setWebsite).not.toThrow();
    expect(props.closeOverlay).not.toThrow();
  });
});
