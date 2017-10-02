import React from 'react';
import ObjectEditorConnect from '../ObjectEditorConnect';
import ObjectEditorContainer from '../ObjectEditorContainer';
import CompanyDisplay from './CompanyDisplay';
import Companies from '../../../api/company/companyCollection';

export const companyProps = {
  collection: Companies,
  subscription: 'company.single',
  parentPage: {
    label: 'Companies',
    path: '/companies',
  },
  savePropertiesMethod: 'company.saveProperties',
  addInteractionMethod: 'company.addInteraction',
  properties: [
    { name: 'name', label: 'Name', fieldType: 'TEXT', default: '' },
    { name: 'website', label: 'Website', fieldType: 'TEXT', default: '' },
    {
      name: 'industry',
      label: 'Industry',
      fieldType: 'TEXT',
      default: '',
    },
    {
      name: 'phoneNumber',
      label: 'Phone Number',
      fieldType: 'TEXT',
      default: '',
    },
    {
      name: 'streetAddress',
      label: 'Street Address',
      type: 'text',
    },
    {
      name: 'city',
      label: 'City',
      type: 'TEXT',
    },
    {
      name: 'stateRegion',
      label: 'State/Region',
      type: 'TEXT',
    },
    {
      name: 'postalCode',
      label: 'Postal Code',
      type: 'TEXT',
    },
    {
      name: 'numberOfEmployees',
      label: 'Number of Employees',
      type: 'TEXT',
    },
    {
      name: 'annualRevenue',
      label: 'Annual Revenue',
      type: 'TEXT',
    },
    {
      name: 'timeZone',
      label: 'Time Zone',
      type: 'TEXT',
    },
    {
      name: 'description',
      label: 'Description',
      type: 'TEXT',
    },
  ],
  interactions: ['NEW_NOTE', 'LOG_ACTIVITY'],
};

const CompanyConnect = ObjectEditorConnect(
  ObjectEditorContainer(CompanyDisplay)
);

const Opportunity = props => <CompanyConnect {...props} {...companyProps} />;

export default Opportunity;
