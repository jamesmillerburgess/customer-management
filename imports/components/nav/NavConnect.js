import { connect } from 'react-redux';
import { Accounts } from 'meteor/accounts-base';

import NavDisplay from './NavDisplay';

import { setNavProp } from '../../state/actions/navActionCreators';

export const mapStateToProps = ({ nav }) => ({
  isProfileMenuOpen: nav.isProfileMenuOpen || false,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setIsProfileMenuOpen: value =>
    dispatch(setNavProp('isProfileMenuOpen', value)),
  goToProfile: () => ownProps.history.push('/profile'),
});

const NavConnect = connect(mapStateToProps, mapDispatchToProps)(NavDisplay);

export default NavConnect;
