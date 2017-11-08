import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import AddObjectConnect, * as AOC from './AddObjectConnect';
import FieldLists from '../../api/fieldList/fieldListCollection';

describe('AddObjectConnect.js', () => {
  describe('getPage Function', () => {
    it('switches on entryMode', () => {
      expect(AOC.getPage('GOOGLE_PLACES')).toBe('ADD_COMPANY_GOOGLE_PLACES');
      expect(AOC.getPage('MANUAL_ENTRY')).toBe('COMPANY_PROPERTIES');
      expect(AOC.getPage('XXX')).toBe(null);
    });
  });
  describe('AddObjectConnect Component', () => {
    it('connects AddObjectDisplay', () => {
      expect(AddObjectConnect.displayName).toBe('Connect(AddObjectDisplay)');
    });
  });
  describe('mapStateToProps Function', () => {
    it('maps overlay state', () => {
      FieldLists.docs = [{ page: '', fields: [{ name: 'a', default: '' }] }];
      const state = { overlay: {}, other: 'b' };
      const ownProps = {};
      expect(AOC.mapStateToProps(state, ownProps).fields[0].value).toBe('');
      state.overlay.a = 'b';
      expect(AOC.mapStateToProps(state, ownProps).fields[0].value).toBe('b');
    });
    it('assumes no fields if no FieldList is found', () => {
      FieldLists.docs = [];
      const state = { overlay: {}, other: 'b' };
      const ownProps = {};
      expect(AOC.mapStateToProps(state, ownProps).fields.length).toBe(0);
    });
    it('passes the errorMessage from the state as is', () => {
      const state = { overlay: { errorMessage: 'a' } };
      const ownProps = {};
      expect(AOC.mapStateToProps(state, ownProps).errorMessage).toBe('a');
    });
    it('sets the errorMessageClass based on showErrorMessage', () => {
      const state = { overlay: { showErrorMessage: true } };
      const ownProps = {};
      expect(AOC.mapStateToProps(state, ownProps).errorMessageClass).toBe(
        'show'
      );
      state.overlay.showErrorMessage = false;
      expect(AOC.mapStateToProps(state, ownProps).errorMessageClass).toBe(
        'hide'
      );
    });
  });
  describe('mapDispatchToProps Function', () => {
    it('maps login dispatchers', () => {
      const ownProps = {
        history: { push: jest.fn() },
        createMethod: 'company.create',
      };
      const props = AOC.mapDispatchToProps(() => null, ownProps);
      Meteor.err = null;
      Meteor._methods['company.create'] = jest.fn();
      expect(props.setProp).not.toThrow();
      expect(props.closeOverlay).not.toThrow();
      expect(props.create).not.toThrow();
    });
    it('handles server errors', () => {
      const ownProps = {
        history: { push: jest.fn() },
        createMethod: 'company.create',
      };
      const props = AOC.mapDispatchToProps(() => null, ownProps);
      Meteor.err = 'err';
      Meteor._methods['company.create'] = jest.fn();
      expect(props.create).not.toThrow();
    });
    it('handles thrown client errors', () => {
      const ownProps = {
        history: { push: jest.fn() },
        createMethod: 'company.create',
      };
      const props = AOC.mapDispatchToProps(() => null, ownProps);
      Meteor.err = 'err';
      Meteor._methods['company.create'] = () => {
        throw new Error('err');
      };
      jest.useFakeTimers();
      expect(props.create).not.toThrow();
      expect(setTimeout.mock.calls.length).toBe(1);
      expect(setTimeout.mock.calls[0][1]).toBe(5000);
      jest.runAllTimers();
    });
  });
});
