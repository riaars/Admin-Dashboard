import React from 'react';
import {Link} from 'react-router-dom';

const SignInLink = () => {
  return (
    <ul className="right">
      <li>
        <Link to="/create">New Project</Link>
      </li>
      <li>
        <Link to="/">Logout</Link>
      </li>
      <li>
        <Link to="/" className="btn btn-floating pink lighten-1">
          Ria
        </Link>
      </li>
    </ul>
  );
};

export default SignInLink;
