import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const addHeader: FC = () => {
  return (
    <header>
      <Link className="header-link" to="/">
        Home
      </Link>
      <Link className="header-link" to="/about">
        About Us
      </Link>
    </header>
  );
};

export default addHeader;
