import { Meteor } from 'meteor/meteor';
import AppConnect, { mapStateToProps, mapDispatchToProps } from './AppConnect';

describe('AppConnect Component', () => {
  it('connects AppDisplay', () => {
    expect(AppConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { app: {}, other: 'b' };
    expect(mapStateToProps(state).isOverlayOpen).toEqual(false);
    state.app.isOverlayOpen = true;
    expect(mapStateToProps(state).isOverlayOpen).toEqual(true);
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    expect(props).toEqual({});
  });
});
