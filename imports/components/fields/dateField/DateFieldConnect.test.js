import { Meteor } from 'meteor/meteor';
import DateFieldConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './DateFieldConnect';

describe('DateFieldConnect Component', () => {
  it('connects AppDisplay', () => {
    expect(DateFieldConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { i18n: {}, other: 'b' };
    expect(mapStateToProps(state).locale).toEqual('en-us');
    state.i18n.locale = 'ko';
    expect(mapStateToProps(state).locale).toEqual('ko');
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    expect(props).toEqual({});
  });
});
