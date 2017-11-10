import { Meteor } from 'meteor/meteor';
import PropertiesEditorConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './PropertiesEditorConnect';

describe('PropertiesEditorConnect Component', () => {
  it('returns a function', () => {
    expect(PropertiesEditorConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('copies in the objectEditor properties if present', () => {
    const state = { objectEditor: { name: 'a' } };
    const ownProps = { properties: [{ name: 'name' }] };
    expect(mapStateToProps(state, ownProps).fields[0].value).toBe('a');
  });
  it('defaults any missing properties in the state to blank', () => {
    const state = { objectEditor: {} };
    const ownProps = { properties: [{ name: 'name' }] };
    expect(mapStateToProps(state, ownProps).fields[0].value).toBe('');
  });
  it('copies loadedValues from ownProps', () => {
    const state = { objectEditor: {} };
    const ownProps = { properties: [], loadedValues: { name: 'a' } };
    expect(mapStateToProps(state, ownProps).loadedValues.name).toBe('a');
  });
  it('sets isEditingProperties to false if hasLoaded is false', () => {
    const state = { objectEditor: { hasLoaded: false } };
    const ownProps = { properties: [] };
    expect(mapStateToProps(state, ownProps).isEditingProperties).toBe(false);
  });
  it('sets isEditingProperties to false if it has loaded but all properties match loadedValues', () => {
    const state = { objectEditor: { hasLoaded: true, name: 'a' } };
    const ownProps = {
      properties: [{ name: 'name' }],
      loadedValues: { name: 'a' },
    };
    expect(mapStateToProps(state, ownProps).isEditingProperties).toBe(false);
  });
  it('compares the properties agains blank if there is no loaded value', () => {
    const state = { objectEditor: { hasLoaded: true, name: '' } };
    const ownProps = {
      properties: [{ name: 'name' }],
      loadedValues: {},
    };
    expect(mapStateToProps(state, ownProps).isEditingProperties).toBe(false);
  });
  it('sets isEditingProperties to true if it has loaded and at least one property does not match loadedValues', () => {
    const state = {
      objectEditor: { hasLoaded: true, name: 'a', website: 'b' },
    };
    const ownProps = {
      properties: [{ name: 'name' }, { name: 'website' }],
      loadedValues: { name: 'a', website: 'c' },
    };
    expect(mapStateToProps(state, ownProps).isEditingProperties).toBe(true);
  });
  it('sets numEditedProperties to the number properties that do not match loadedValues', () => {
    const state = {
      objectEditor: { hasLoaded: true, name: 'a', website: 'b' },
    };
    const ownProps = {
      properties: [{ name: 'name' }, { name: 'website' }],
      loadedValues: { name: 'a', website: 'c' },
    };
    expect(mapStateToProps(state, ownProps).numEditedProperties).toBe(1);
    state.objectEditor.website = 'c';
    expect(mapStateToProps(state, ownProps).numEditedProperties).toBe(0);
  });
  it('sets hasLoaded to the state if present', () => {
    const state = { objectEditor: { hasLoaded: true } };
    const ownProps = { properties: [] };
    expect(mapStateToProps(state, ownProps).hasLoaded).toBe(true);
  });
  it('defaults hasLoaded to false if the state is not present', () => {
    const state = { objectEditor: {} };
    const ownProps = { properties: [] };
    expect(mapStateToProps(state, ownProps).hasLoaded).toBe(false);
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const dispatch = jest.fn();
    const ownProps = {
      match: { params: { uriId: 'a' } },
      properties: [{ name: 'a' }],
      loadedValues: { a: 'a' },
    };
    const props = mapDispatchToProps(dispatch, ownProps);
    Meteor.err = null;
    expect(props.setIsExpanded).not.toThrow();
    expect(props.setProperty).not.toThrow();
    expect(props.setHasLoaded).not.toThrow();
    expect(props.setLoadedValues).not.toThrow();
    expect(props.save).not.toThrow();
    expect(props.cancelEdit).not.toThrow();
  });
  it('handles errors when calling save', () => {
    Meteor.err = 'a';
    const dispatch = jest.fn();
    const ownProps = {
      match: { params: { uriId: 'a' } },
      properties: [{ name: 'a' }],
      loadedValues: { a: 'a' },
    };
    const props = mapDispatchToProps(dispatch, ownProps);
    expect(props.save).not.toThrow();
  });
});
