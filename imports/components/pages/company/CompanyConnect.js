import { connect } from 'react-redux';

import CompanyContainer from './CompanyContainer';
import { setCompanyProp } from '../../../state/actions/companyActionCreators';

export const COMPANY_FIELDS = [
  {
    property: 'name',
    label: 'Name',
    type: 'text',
  },
  {
    property: 'website',
    label: 'Website',
    type: 'text',
  },
  {
    property: 'industry',
    label: 'Industry',
    type: 'text',
  },
  {
    property: 'phoneNumber',
    label: 'Phone Number',
    type: 'text',
  },
  {
    property: 'streetAddress',
    label: 'Street Address',
    type: 'text',
  },
  {
    property: 'city',
    label: 'City',
    type: 'text',
  },
  {
    property: 'stateRegion',
    label: 'State/Region',
    type: 'text',
  },
  {
    property: 'postalCode',
    label: 'Postal Code',
    type: 'text',
  },
  {
    property: 'numberOfEmployees',
    label: 'Number of Employees',
    type: 'text',
  },
  {
    property: 'annualRevenue',
    label: 'Annual Revenue',
    type: 'text',
  },
  {
    property: 'timeZone',
    label: 'Time Zone',
    type: 'text',
  },
  {
    property: 'description',
    label: 'Description',
    type: 'text',
  },
];

export const mapStateToProps = ({ company }) => {
  const props = {};
  COMPANY_FIELDS.forEach(
    (field, index) => (props[field.property] = company[field.property] || '')
  );
  props.isEditingCompany =
    company.hasLoaded &&
    COMPANY_FIELDS.reduce(
      (prev, field) =>
        prev ||
        props[field.property] !== (company.loadedValues[field.property] || ''),
      false
    );
  props.note = company.note || '';
  props.isWritingNote = company.note ? true : false;
  props.hasLoaded = company.hasLoaded || false;
  return props;
};

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setProperty: (property, value) => dispatch(setCompanyProp(property, value)),
  setName: value => dispatch(setCompanyProp('name', value)),
  setWebsite: value => dispatch(setCompanyProp('website', value)),
  setNote: value => dispatch(setCompanyProp('note', value)),
  addNote: value => {
    Meteor.call(
      'company.addNote',
      ownProps.match.params.companyId,
      value,
      (err, res) => {
        if (!err) {
          dispatch(setCompanyProp('note', ''));
        } else {
          console.log(err);
        }
      }
    );
  },
  cancelNote: () => {
    dispatch(setCompanyProp('note', ''));
    dispatch(setCompanyProp('isWritingNote', false));
  },
  setHasLoaded: value => dispatch(setCompanyProp('hasLoaded', value)),
  setLoadedValues: value => dispatch(setCompanyProp('loadedValues', value)),
  saveCompany: value => {
    Meteor.call(
      'company.save',
      ownProps.match.params.companyId,
      value,
      (err, res) => {
        dispatch(setCompanyProp('hasLoaded', false));
      }
    );
  },
  cancelEditCompany: () => {
    dispatch(setCompanyProp('name'));
  },
});

const CompanyConnect = connect(mapStateToProps, mapDispatchToProps)(
  CompanyContainer
);

export default CompanyConnect;
