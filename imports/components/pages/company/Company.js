import React from 'react';
import ObjectEditorConnect from '../objectEditor/ObjectEditorConnect';
import ObjectEditorContainer from '../objectEditor/ObjectEditorContainer';
import ObjectEditorDisplay from '../objectEditor/ObjectEditorDisplay';
import Companies from '../../../api/company/companyCollection';
import FieldLists from '../../../api/fieldList/fieldListCollection';

export const companyProps = () => ({
  collection: Companies,
  subscription: 'company.single',
  avatarPath: '/empty-company-pic.png',
  parentPage: {
    label: 'Companies',
    path: '/companies',
  },
  savePropertiesMethod: 'company.saveProperties',
  addInteractionMethod: 'company.addInteraction',
  properties: FieldLists.findOne({ page: 'COMPANY_PROPERTIES' })
    ? FieldLists.findOne({ page: 'COMPANY_PROPERTIES' }).fields
    : [],
  interactions: ['NEW_NOTE', 'LOG_ACTIVITY'],
});

const CompanyConnect = ObjectEditorConnect(
  ObjectEditorContainer(ObjectEditorDisplay)
);

const Company = props => <CompanyConnect {...props} {...companyProps()} />;

export default Company;
