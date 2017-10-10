import { connect } from 'react-redux';
import { Meteor } from 'meteor/meteor';

import NavContainer from './NavContainer';

import { setNavProp } from '../../../state/actions/navActionCreators';
import { setLoginProp } from '../../../state/actions/loginActionCreators';
import { LOGIN } from '../../pages/home/HomeConstants';

export const mapStateToProps = ({ nav }) => ({
  isProfileMenuOpen: nav.isProfileMenuOpen || false,
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  setIsProfileMenuOpen: value =>
    dispatch(setNavProp('isProfileMenuOpen', value)),
  goToProfile: e => {
    dispatch(setNavProp('isProfileMenuOpen', false));
    e.preventDefault();
    ownProps.history.push('/profile/basic-info');
  },
  tryLogout: e => {
    dispatch(setNavProp('isProfileMenuOpen', false));
    e.preventDefault();
    Meteor.logout(() => {
      dispatch(setLoginProp('mode', LOGIN));
      ownProps.history.push('/');
    });
  },
});

const NavConnect = connect(mapStateToProps, mapDispatchToProps)(NavContainer);

export default NavConnect;
