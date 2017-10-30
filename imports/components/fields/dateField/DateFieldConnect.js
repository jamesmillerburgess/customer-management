import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import DateFieldDisplay from './DateFieldDisplay';

export const mapStateToProps = ({ i18n }) => ({
  locale: i18n.locale || 'en-us',
});

export const mapDispatchToProps = dispatch => ({});

const DateFieldConnect = connect(mapStateToProps, mapDispatchToProps)(
  DateFieldDisplay
);

export default DateFieldConnect;
