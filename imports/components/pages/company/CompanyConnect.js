import { connect } from 'react-redux';

import CompanyContainer from './CompanyContainer';
import { setCompanyProp } from '../../../state/actions/companyActionCreators';

export const mapStateToProps = ({ company }) => ({
  name: company.name || '',
  website: company.website || '',
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setName: value => dispatch(setCompanyProp('name', value)),
  setWebsite: value => dispatch(setCompanyProp('website', value)),
});

const CompanyConnect = connect(mapStateToProps, mapDispatchToProps)(
  CompanyContainer
);

export default CompanyConnect;
