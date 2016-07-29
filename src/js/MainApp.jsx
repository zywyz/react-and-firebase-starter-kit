import React, { PropTypes } from 'react';
import Nav from './Nav';

const propTypes = {
  children: PropTypes.node.isRequired,
};

const MainApp = ({ children }) => (
  <div className="container">
    <div className="logo"></div>
    <h1>MainApp</h1>
    <Nav />
    <div className="content">
      {children}
    </div>
  </div>
);

MainApp.propTypes = propTypes;

export default MainApp;
