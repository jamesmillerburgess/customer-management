import React from 'react';

import ListPageConnect, {
  generateListPageProps,
} from '../listPage/ListPageConnect';
import Companies from '../../../api/company/companyCollection';

export const companyListProps = generateListPageProps(
  'company',
  'companies',
  Companies
);

const CompanyList = props => (
  <ListPageConnect {...props} {...companyListProps} />
);

export default CompanyList;
