import { connect } from 'react-redux';

import CompanyContainer from './CompanyContainer';
import { setCompanyProp } from '../../../state/actions/companyActionCreators';
import { COMPANY_FIELDS } from './CompanyConstants';

export const mapStateToProps = ({ company }) => {
  const props = {};
  COMPANY_FIELDS.forEach(
    (field, index) => (props[field.property] = company[field.property] || '')
  );
  props.numEditedProperties = 0;
  props.isEditingCompany =
    company.hasLoaded &&
    COMPANY_FIELDS.reduce((prev, field) => {
      let diff = false;
      if (
        props[field.property] !== (company.loadedValues[field.property] || '')
      ) {
        diff = true;
        props.numEditedProperties += 1;
      }
      if (prev || diff) {
        return true;
      }
      return false;
    }, false);
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
    dispatch(setCompanyProp('hasLoaded', false));
  },
});

const CompanyConnect = connect(mapStateToProps, mapDispatchToProps)(
  CompanyContainer
);

export default CompanyConnect;
