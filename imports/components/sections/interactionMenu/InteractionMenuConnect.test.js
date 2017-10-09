import { Meteor } from 'meteor/meteor';
import InteractionMenuConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './InteractionMenuConnect';

describe('InteractionMenuConnect Component', () => {
  it('returns a function', () => {
    expect(InteractionMenuConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('prefers the activeInteraction from the state', () => {
    const state = { objectEditor: { activeInteraction: 'a' } };
    const ownProps = { interactions: ['b'] };
    expect(mapStateToProps(state, ownProps).activeInteraction).toBe('a');
  });
  it('will take the first integration from the props otherwise', () => {
    const state = { objectEditor: { activeInteraction: null } };
    const ownProps = { interactions: ['b'] };
    expect(mapStateToProps(state, ownProps).activeInteraction).toBe('b');
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    expect(props.setActiveInteraction).not.toThrow();
  });
});
