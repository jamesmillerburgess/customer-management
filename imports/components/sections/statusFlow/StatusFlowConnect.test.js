import { Meteor } from 'meteor/meteor';
import StatusFlowConnect, {
  mapStateToProps,
  mapDispatchToProps,
} from './StatusFlowConnect';

describe('StatusFlowConnect Component', () => {
  it('returns a function', () => {
    expect(StatusFlowConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('finds the status index', () => {
    const ownProps = {
      status: 'a',
      statuses: [{ value: 'b' }, { value: 'a' }],
    };
    expect(mapStateToProps({}, ownProps).statusIndex).toBe(1);
    ownProps.status = 'b';
    expect(mapStateToProps({}, ownProps).statusIndex).toBe(0);
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
    expect(props.updateStatus).not.toThrow();
  });
  it('handles errors when calling updateStatus', () => {
    Meteor.err = 'a';
    const dispatch = jest.fn();
    const ownProps = {
      match: { params: { a: 'a' } },
      updateStatusMessage: 'a',
      loadedValues: { a: 'a' },
      uriId: 'a',
    };
    const props = mapDispatchToProps(dispatch, ownProps);
    expect(() => props.updateStatus('a')).not.toThrow();
  });
});
