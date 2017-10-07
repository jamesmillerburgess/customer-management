import React from 'react';
import ObjectEditorConnect, {
  generateObjectEditorProps,
} from '../objectEditor/ObjectEditorConnect';
import ObjectEditorDisplay from '../objectEditor/ObjectEditorDisplay';
import Companies from '../../../api/company/companyCollection';
import FieldLists from '../../../api/fieldList/fieldListCollection';

export const companyProps = {
  ...generateObjectEditorProps('company', 'companies'),
  collection: Companies,
  avatarPath: '/empty-company-pic.png',
  interactions: ['NEW_NOTE', 'LOG_ACTIVITY'],
};

export const properties = () =>
  FieldLists.findOne({ page: 'COMPANY_PROPERTIES' })
    ? FieldLists.findOne({ page: 'COMPANY_PROPERTIES' }).fields
    : [];

const CompanyConnect = ObjectEditorConnect(ObjectEditorDisplay);

const Company = props => (
  <CompanyConnect {...props} {...companyProps} properties={properties()} />
);

export default Company;
