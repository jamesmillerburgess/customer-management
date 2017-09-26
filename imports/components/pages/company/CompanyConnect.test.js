import { Meteor } from 'meteor/meteor';
import CompanyConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './CompanyConnect';

describe('CompanyConnect Component', () => {
  it('connects CompaniesContainer', () => {
    expect(CompanyConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { company: {}, other: 'b' };
    expect(mapStateToProps(state).numEditedProperties).toEqual(0);
  });
  it('sets isEditingCompany to false if it has not loaded', () => {
    const state = { company: { hasLoaded: false } };
    expect(mapStateToProps(state).isEditingCompany).toEqual(false);
  });
  it('sets isEditingCompany to false if it has loaded by all fields match', () => {
    const state = {
      company: { hasLoaded: true, name: 'a', loadedValues: { name: 'a' } },
    };
    expect(mapStateToProps(state).isEditingCompany).toEqual(false);
  });
  it('sets isEditingCompany to true if it has loaded and some fields do not match', () => {
    const state = {
      company: { hasLoaded: true, name: 'a', loadedValues: { name: 'b' } },
    };
    expect(mapStateToProps(state).isEditingCompany).toEqual(true);
  });
  it('sets isWritingNote to false if there is not a note', () => {
    const state = { company: { note: '' } };
    expect(mapStateToProps(state).isWritingNote).toEqual(false);
  });
  it('sets isWritingNote to true if there is a note', () => {
    const state = { company: { note: 'a' } };
    expect(mapStateToProps(state).isWritingNote).toEqual(true);
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
    expect(props.saveCompany).not.toThrow();
    expect(props.cancelEditCompany).not.toThrow();
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
  it('handles errors when saving a company', () => {
    const dispatch = jest.fn();
    const ownProps = { match: { params: { companyId: 'a' } } };
    const props = mapDispatchToProps(dispatch, ownProps);
    Meteor.err = 'a';
    expect(props.saveCompany).not.toThrow();
    Meteor.err = null;
    expect(props.saveCompany).not.toThrow();
  });
});
