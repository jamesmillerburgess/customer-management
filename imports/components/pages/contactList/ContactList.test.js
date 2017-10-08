import ContactList, { contactListProps } from './ContactList';

describe('ContactList Component', () => {
  it('connects CompaniesContainer', () => {
    expect(ContactList).toBeInstanceOf(Function);
  });
  it('does not throw', () => {
    expect(ContactList).not.toThrow();
  });
});
describe('gridPageProps Function', () => {
  it('renders a link in the name cells', () => {
    const Cell = contactListProps
      .gridPageProps([{ _id: 'a' }])
      .columns[1].Cell({ index: 0 });
    expect(Cell.props.to).toBe('/contacts/a');
  });
  it('renders a date in the create date cells', () => {
    const Cell = contactListProps
      .gridPageProps()
      .columns[2].Cell({ value: '20111031' });
    expect(Cell.props.children).toBe('Oct 31, 2011');
  });
});
