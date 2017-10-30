import { Meteor } from 'meteor/meteor';
import AppConnect, { mapStateToProps, mapDispatchToProps } from './AppConnect';

describe('AppConnect Component', () => {
  it('connects AppDisplay', () => {
    expect(AppConnect).toBeInstanceOf(Function);
  });
});
describe('mapStateToProps Function', () => {
  it('maps login state', () => {
    const state = { app: {}, i18n: {}, other: 'b' };
    expect(mapStateToProps(state).isOverlayOpen).toEqual(false);
    expect(mapStateToProps(state).locale).toEqual('en-us');
    state.app.isOverlayOpen = true;
    state.i18n.locale = 'ko';
    expect(mapStateToProps(state).isOverlayOpen).toEqual(true);
    expect(mapStateToProps(state).locale).toEqual('ko');
  });
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    expect(props.setLocale).not.toThrow();
  });
});
