import React, { PropTypes } from 'react';
import Nav from './components/Nav.jsx';
import LoginButton from './components/LoginButton';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const MainApp = ({ children }) => (
  <div>
    <header>
      <div className="logo"></div>
      <h1>React & Firebase starter kit</h1>
      <Nav />
      <LoginButton />
    </header>
    <div className="container">
      <div className="content">
        {children}
      </div>
    </div>
  </div>
);

MainApp.propTypes = propTypes;

export default MainApp;
