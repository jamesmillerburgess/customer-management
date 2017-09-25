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
});
describe('mapDispatchToProps Function', () => {
  it('maps login dispatchers', () => {
    const dispatch = jest.fn();
    const props = mapDispatchToProps(dispatch);
    expect(props.setProperty).not.toThrow();
  });
});
