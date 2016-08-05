import { connect } from 'react-redux';
import LoginButtonView from './LoginButtonView';
import { loginOrRegisterWithGoogle, logout } from '../actions/firebase';

const mapStateToProps = state => ({
  logged: state.loginStatus.logged,
  name: state.loginStatus.name,
  photo: state.loginStatus.photo,
});

const mapDispatchToProps = dispatch => ({
  loginOrRegisterWithGoogle: () => dispatch(loginOrRegisterWithGoogle()),
  logout: () => dispatch(logout()),
});

const LoginButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginButtonView);

module.exports = LoginButton;
