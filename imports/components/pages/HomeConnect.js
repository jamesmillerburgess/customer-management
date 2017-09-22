import { connect } from 'react-redux';

import HomeDisplay from './HomeDisplay';

import { setLoginProp } from '../../state/actions/loginActionCreators';

export const mapStateToProps = ({ login }) => ({ login });

export const mapDispatchToProps = dispatch => ({
  dispatchers: {
    setUsername: value => dispatch(setLoginProp('username', value)),
    setPassword: value => dispatch(setLoginProp('password', value)),
    setPasswordAgain: value => dispatch(setLoginProp('passwordAgain', value)),
  },
});

const HomeConnect = connect(mapStateToProps, mapDispatchToProps)(HomeDisplay);

export default HomeConnect;
