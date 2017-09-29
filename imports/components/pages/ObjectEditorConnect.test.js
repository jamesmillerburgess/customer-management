import { Meteor } from 'meteor/meteor';
import ObjectEditorConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './ObjectEditorConnect';

describe('ObjectEditorConnect Component', () => {
  it('returns a function', () => {
    expect(ObjectEditorConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { objectEditor: {}, other: 'b' };
    const ownProps = { fields: [{ property: 'name' }] };
    expect(mapStateToProps(state, ownProps).numEditedProperties).toEqual(0);
  });
  it('sets isEditingProperties to false if it has not loaded', () => {
    const state = { objectEditor: { hasLoaded: false } };
    const ownProps = { fields: [{ property: 'name' }] };
    expect(mapStateToProps(state, ownProps).isEditingProperties).toEqual(false);
  });
  it('sets isEditingProperties to false if it has loaded by all fields match', () => {
    const state = {
      objectEditor: { hasLoaded: true, name: 'a', loadedValues: { name: 'a' } },
    };
    const ownProps = { fields: [{ property: 'a' }] };
    expect(mapStateToProps(state, ownProps).isEditingProperties).toEqual(false);
  });
  it('sets isEditingProperties to true if it has loaded and some fields do not match', () => {
    const state = {
      objectEditor: { hasLoaded: true, name: 'a', loadedValues: { name: 'b' } },
    };
    const ownProps = { fields: [{ property: 'name' }] };
    expect(mapStateToProps(state, ownProps).isEditingProperties).toEqual(true);
  });
  it('sets isWritingNote to false if there is not a note', () => {
    const state = { objectEditor: { note: '' } };
    const ownProps = { fields: [{ property: 'name' }] };
    expect(mapStateToProps(state, ownProps).isWritingNote).toEqual(false);
  });
  it('sets isWritingNote to true if there is a note', () => {
    const state = { objectEditor: { note: 'a' } };
    const ownProps = { fields: [{ property: 'name' }] };
    expect(mapStateToProps(state, ownProps).isWritingNote).toEqual(true);
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const dispatch = jest.fn();
    const ownProps = { match: { params: { companyId: 'a' } } };
    const props = mapDispatchToProps(dispatch, ownProps);
    expect(props.setProperty).not.toThrow();
    expect(props.setNote).not.toThrow();
    expect(props.addNote).not.toThrow();
    expect(props.cancelNote).not.toThrow();
    expect(props.setHasLoaded).not.toThrow();
    expect(props.setLoadedValues).not.toThrow();
    expect(props.save).not.toThrow();
    expect(props.cancelEditProperties).not.toThrow();
  });
  it('handles errors when adding a note', () => {
    const dispatch = jest.fn();
    const ownProps = { match: { params: { companyId: 'a' } } };
    const props = mapDispatchToProps(dispatch, ownProps);
    Meteor.err = 'a';
    expect(props.addNote).not.toThrow();
    Meteor.err = null;
    expect(props.addNote).not.toThrow();
  });
  it('handles errors when saving', () => {
    const dispatch = jest.fn();
    const ownProps = { match: { params: { companyId: 'a' } } };
    const props = mapDispatchToProps(dispatch, ownProps);
    Meteor.err = 'a';
    expect(props.save).not.toThrow();
    Meteor.err = null;
    expect(props.save).not.toThrow();
  });
});
