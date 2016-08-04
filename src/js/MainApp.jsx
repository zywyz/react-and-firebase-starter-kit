import React, { PropTypes } from 'react';
import Nav from './Nav';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const MainApp = ({ children }) => (
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>React & Firebase starter kit</h1>
      <Nav />
    </header>
    <div className="content">
      {children}
    </div>
  </div>
);

MainApp.propTypes = propTypes;

export default MainApp;
