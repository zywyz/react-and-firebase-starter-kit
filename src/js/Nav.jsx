import React from 'react';
import { Link } from 'react-router';

const Nav = () => (
  <ul>
    <li><Link to="/">Homepage</Link></li>
    <li><Link to="/subpage">Subpage</Link></li>
  </ul>
);

export default Nav;
