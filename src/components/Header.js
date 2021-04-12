import React, { useRef, useState } from 'react';

import { Link } from 'react-router-dom';

function Header({ onChange, onClick }) {


  
  return (
    <div className="Header">
      <h1>Worldwide Dictionary</h1>
      <div className="NavBar">
        <Link className="Nav" to={'/country/china'}>China</Link>
        <Link className="Nav" to={'/country/israel'}>Israel</Link>
        <Link className="Nav" to={'/country/russia'}>Russia</Link>
        <Link className="Nav" to={'/country/korea'}>Korea</Link>
      </div>
      <input placeholder="Please enter a country..." className="HeaderInput" type="text" onChange={(e) => onChange(e.target.value)} />
      <button className="HeaderButton" onClick={() => onClick()}>Search</button>
    </div>
  );
}

export default Header;
