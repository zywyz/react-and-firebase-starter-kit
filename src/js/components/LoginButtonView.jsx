import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';

export default class LoginButtonView extends Component {
  static propTypes = {
    logged: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    logout: PropTypes.func.isRequired,
    loginOrRegisterWithGoogle: PropTypes.func.isRequired,
  };

  constructor() {
    super();

    this.state = {
      hidden: true,
    };
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleAppClick);
  }

  handleUserInfoClick = () => {
    const h = this.state.hidden;
    if (h) {
      document.addEventListener('click', this.handleAppClick);
    }
    this.setState({
      hidden: !this.state.hidden,
    });
  };

  handleAppClick = (e) => {
    document.removeEventListener('click', this.handleAppClick);
    const dropdown = ReactDOM.findDOMNode(this.refs.dropdown);

    if (!dropdown.contains(e.target)) {
      this.setState({
        hidden: true,
      });
    }
  };

  handleLogoutClick = () => {
    this.setState({
      hidden: true,
    });
    this.props.logout();
  };

  render() {
    if (!this.props.logged) {
      return (
        <a className="login" onClick={this.props.loginOrRegisterWithGoogle}>Login</a>
      );
    }
    return (
      <div className="login-button">
        <div className="user-info" onClick={this.handleUserInfoClick}>
          <img src={this.props.photo} alt="profile-picutre" />
          <span>{this.props.name}</span>
          <div className="icon">&#9660;</div>
        </div>
        <a
          className={`logout${this.state.hidden ? ' hidden' : ''}`}
          onClick={this.handleLogoutClick}
          ref="dropdown"
        >
          Logout
        </a>
      </div>
    );
  }
}
