import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return(
    <div className="header">
      <Link to='/' className="logo">Realty North</Link>
      <Link to='/browse/'>Browse</Link>
    </div>
  );
}

export default Header;