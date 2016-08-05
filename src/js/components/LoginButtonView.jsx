import React, { PropTypes } from 'react';

const propTypes = {
  logged: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
  loginOrRegisterWithGoogle: PropTypes.func.isRequired,
};

const LoginButtonView = (props) => {
  if (!props.logged) {
    return (
      <a className="login" onClick={props.loginOrRegisterWithGoogle}>Login</a>
    );
  }
  return (
    <div className="user-info">
      <img src={props.photo} alt="profile-picutre" />
      <span>{props.name}</span>
      <a className="logout" onClick={props.logout}>Logout</a>
    </div>
  );
};

LoginButtonView.propTypes = propTypes;

export default LoginButtonView;
