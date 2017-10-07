import CompanyList, { companyListProps } from './CompanyList';

describe('CompanyList Component', () => {
  it('connects ListPageContainer', () => {
    expect(CompanyList).toBeInstanceOf(Function);
  });
  it('does not throw', () => {
    expect(CompanyList).not.toThrow();
  });
});
describe('gridPageProps Function', () => {
  it('renders a link in the name cells', () => {
    const Cell = companyListProps
      .gridPageProps([{ _id: 'a' }])
      .columns[1].Cell({ index: 0 });
    expect(Cell.props.to).toBe('/companies/a');
  });
  it('renders a date in the create date cells', () => {
    const Cell = companyListProps
      .gridPageProps()
      .columns[2].Cell({ value: '20111031' });
    expect(Cell.props.children).toBe('Oct 31, 2011');
  });
});
