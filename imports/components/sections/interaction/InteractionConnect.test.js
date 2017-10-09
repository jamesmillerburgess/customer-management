import { Meteor } from 'meteor/meteor';
import InteractionConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './InteractionConnect';

describe('InteractionConnect Component', () => {
  it('returns a function', () => {
    expect(InteractionConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('copies in the objectEditor properties if present', () => {
    const state = { objectEditor: { text: 'a', time: 'b', outcome: 'c' } };
    const ownProps = {
      textProp: 'text',
      timeProp: 'time',
      outcomeProp: 'outcome',
    };
    expect(mapStateToProps(state, ownProps).text).toBe('a');
    expect(mapStateToProps(state, ownProps).time).toBe('b');
    expect(mapStateToProps(state, ownProps).outcome).toBe('c');
  });
  it('applies defaults to any missing properties in the state', () => {
    const state = { objectEditor: {} };
    const ownProps = {
      textProp: 'text',
      timeProp: 'time',
      outcomeProp: 'outcome',
    };
    expect(mapStateToProps(state, ownProps).text).toBe('');
    expect(typeof mapStateToProps(state, ownProps).time).toBe('object');
    expect(mapStateToProps(state, ownProps).outcome).toBe('');
  });
  it('sets isWriting based on if there is text', () => {
    const state = { objectEditor: { text: '' } };
    const ownProps = {
      textProp: 'text',
      timeProp: 'time',
      outcomeProp: 'outcome',
    };
    expect(mapStateToProps(state, ownProps).isWriting).toBe(false);
    state.objectEditor.text = 'a';
    expect(mapStateToProps(state, ownProps).isWriting).toBe(true);
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps dispatchers', () => {
    const dispatch = jest.fn();
    const ownProps = {
      match: { params: { id: 'a' } },
      uriID: 'id',
      textProp: 'text',
      timeProp: 'time',
      outcomeProp: 'outcome',
    };
    const props = mapDispatchToProps(dispatch, ownProps);
    Meteor.err = null;
    expect(props.setText).not.toThrow();
    expect(props.setTime).not.toThrow();
    expect(props.setOutcome).not.toThrow();
    expect(props.logInteraction).not.toThrow();
    expect(props.cancelInteraction).not.toThrow();
  });
  it('handles errors when calling logInteraction', () => {
    Meteor.err = 'a';
    const dispatch = jest.fn();
    const ownProps = {
      match: { params: { id: 'a' } },
      uriID: 'id',
      properties: [{ name: 'a' }],
      loadedValues: { a: 'a' },
    };
    const props = mapDispatchToProps(dispatch, ownProps);
    Meteor.err = 'err';
    expect(props.logInteraction).not.toThrow();
  });
});
