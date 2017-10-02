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
  it('defaults note to blank', () => {
    const state = { objectEditor: { note: null } };
    expect(mapStateToProps(state).note).toBe('');
  });
  it('passes on the value of note if present', () => {
    const state = { objectEditor: { note: 'a' } };
    expect(mapStateToProps(state).note).toBe('a');
  });
  it('sets isWritingNote to false if note is falsy', () => {
    const state = { objectEditor: { note: null } };
    expect(mapStateToProps(state).isWritingNote).toBe(false);
    state.objectEditor.note = '';
    expect(mapStateToProps(state).isWritingNote).toBe(false);
  });
  it('sets isWritingNote to true if note is truthy', () => {
    const state = { objectEditor: { note: 'a' } };
    expect(mapStateToProps(state).isWritingNote).toBe(true);
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const dispatch = jest.fn();
    const ownProps = { match: { params: { uriId: 'a' } } };
    const props = mapDispatchToProps(dispatch, ownProps);
    Meteor.err = null;
    expect(props.setNote).not.toThrow();
    expect(props.addNote).not.toThrow();
    expect(props.cancelNote).not.toThrow();
  });
  it('handles errors when adding a note', () => {
    Meteor.err = 'a';
    const dispatch = jest.fn();
    const ownProps = { match: { params: { uriId: 'a' } } };
    const props = mapDispatchToProps(dispatch, ownProps);
    expect(props.addNote).not.toThrow();
  });
});
