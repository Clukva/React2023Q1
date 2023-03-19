import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const addHeader: FC = () => {
  return (
    <header>
      <NavLink className="header-link" to="/">
        Home
      </NavLink>
      <NavLink className="header-link" to="/about">
        About Us
      </NavLink>
    </header>
  );
};

export default addHeader;
